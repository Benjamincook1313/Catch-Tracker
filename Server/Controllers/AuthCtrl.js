const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const {FirstName, LastName, Email, Password} = req.body
    const db = req.app.get('db')
    const userArr = await db.findUser(Email)
    if(userArr[0]){
      return res.status(400).send({message: 'User Already exists'})
    }
    const salt = brcypt.genSaltSync(10)
    const hash = hashSync(Password, salt)
    let newUserArr = await db.register([FirstName, LastName, Email, hash])
    req.session.user = {Email: newUserArr[0], id: newUserArr[0].user_id}
    res.status(200).send({
      message: 'logged in',
      userData: req.session.user,
      loggedIn: true
    })
  },
  login: async (req, res) => {
    const {Email, Password} = req.body
    const db = req.app.get('db')
    const userArr = await db.findUser([Email])
    if(userArr.length === 0){
      return res.status(401).send({message: 'User Not Found'})
    }
    const result = bcrypt.compareSync(Password, userArr[0].Hash)
    if(!result) {
      return res.status(401).send({message: 'Incorrect Password'})
    }
    req.session.user = {Email : userArr[0].Email, id: userArr[0].user_id}
    res.status(200).send({
      message: 'logged in',
      userData: req.session.user,
      loggedIn: true
    })
  }
}
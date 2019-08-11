
module.exports = {
  
  checkForUser: async(req, res) => {
    res.status(200).send(req.session.user)
  },

  saveCatch: (req, res) => {

  }
}
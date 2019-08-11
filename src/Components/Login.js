import React, {useState} from 'react'
import axios from 'axios'

export default function Login(props){

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Verify, setVerify] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  async function register(){
    if(Email !== '' && Password !== '' && Email.includes('@') && Verify === Password){
      if(Password !== Verify){alert('Passwords do not match')}
      const res = await axios.post('/auth/register', { FirstName, LastName, Email, Password })
      if(!res.data){
        alert('Login Failed')
      }
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setVerify('')
      setShowRegister(false)
    }
  }

  async function login(props){
    if(Email !== ''){
      const res = await axios.post('/auth/login', {Email, Password})
      console.log(res.data)
        setEmail('')
        setPassword('')
        props.toggleLogin()
        setShowLogin(false)
    }
  }

  async function logout(){
    const res = await axios.get('/auth/logout')
    console.log(res.data)
    if(!res.data){
      props.toggleLogin()
    }
  }

  return(
    <div className='Login'>
      {!props.loggedIn && 
        <div>
          <button onClick={() => setShowLogin(!showLogin)}>login</button>
          <button onClick={() => setShowRegister(!showRegister)}>register</button>
        </div> 
      }
      {props.loggedIn &&
        <button onClick={() => logout()}>logout</button>
      }
      {showRegister &&
        <div>
          First name <input value={FirstName} onChange={ e => setFirstName(e.target.value)}/>
          Last name <input value={LastName} onChange={ e => setLastName(e.target.value)}/>
          Email <input value={Email} onChange={ e => setEmail(e.target.value)}/>
          Password <input type='password' value={Password} onChange={ e => setPassword(e.target.value)}/>
          Verify Password<input type='password' value={Verify} onChange={ e => setVerify(e.target.value)}/>
          <button onClick={() => register()}>Register</button>
          <button onClick={() => setShowRegister(false)}>x</button>
        </div>
      }
      {showLogin &&
        <div>
          Email <input value={Email} onChange={e => setEmail(e.target.value)}/>
          Password <input value={Password} onChange={e => setPassword(e.target.value)}/>
          <button onClick={() => login()}>Login</button>
          <button onClick={() => setShowLogin(false)}>x</button>
        </div>
      }
    </div>
  )
}
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
    if(Email !== '' && Password !== '' && Email.contains('@') && Verify === Password){
      await axios.post('/api/register', {FirstName, LastName, Email, Password})
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setVerify('')
    }
    if(Password !== Verify){alert('Passwords do not match')}
    alert('must enter valid email to register')
  }

  function login(){
    if(Email !== ''){
      axios.post('/api/login', {Email, Password})
    }
  }

  return(
    <div className='Login'>
      <button onClick={() => setShowLogin(!showLogin)}>login</button>
      <button onClick={() => setShowRegister(!showRegister)}>register</button>
      {showRegister &&
        <div>
          First name <input value={FirstName} onChange={e => setFirstName(e.target.value)}/>
          Last name <input value={LastName} onChange={e => setLastName(e.target.value)}/>
          Email <input value={Email} onChange={e => setEmail(e.target.value)}/>
          Password <input value={Password} onChange={e => setPassword(e.target.value)}/>
          Verify <input value={Verify} onChange={e => setVerify(e.target.valeu)}/>
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
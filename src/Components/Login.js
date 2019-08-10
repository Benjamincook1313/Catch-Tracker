import React, {useState} from 'react'
import axios from 'axios'

export default function Login(){

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  // const [showInputs, setShowInputs] = useState(false)

  function register(){
    if(Email !== '' && Password !== '' && Email.contains('@')){
      axios.post('/api/register')
    }
    alert('must enter valid email to register')
  }

  function login(){
    if(Email !== ''){
      axios.post('/api/login')
    }
  }

  return(
    <div className='Login'>
      <button onClick={() => login()}>Login</button>
      <button onClick={() => register()}>Register</button>
        <div>
          Email <input value={Email} onChange={e => setEmail(e.target.value)}/>
          Password <input value={Password} onChange={e => setPassword(e.target.value)}/>
          {/* <button onClick={() => setShowInputs(false)}>x</button> */}
        </div>
    </div>
  )
}
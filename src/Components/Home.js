import React, {useState} from 'react'
import axios from 'axios'

function Home(){
  const [River, setRiver] = useState('')
  const [Species, setSpecies] = useState('')
  const [Fly, setFly] = useState('')
  const [Wheather, setWheather] = useState('')
  const [Image, setImage] = useState('')
  const [Date, setDate] = useState('')
  const [TOD, setTOD] = useState('')

  function saveCatch(){
    axios.post('/api/saveCatch', {River, Species, Fly, Wheather, Image, Date, TOD})
  }

  return(
    <div className='Home' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Home</h1>
      <section className='catch-info'>
        <div>River <input value={River} onChange={e => setRiver(e.target.value)}/></div>
        <div>Species <input value={Species} onChange={e => setSpecies(e.target.value)}/></div>
        <div>Fly <input value={Fly} onChange={e => setFly(e.target.value)}/></div>
        <div>Wheather <input value={Wheather} onChange={e => setWheather(e.target.value)}/></div>
        <div>Image <input value={Image} onChange={e => setImage(e.target.value)}/></div>
        <div>Date <input value={Date} onChange={e => setDate(e.target.value)}/></div>
        <div>Time Of Day<input value={TOD} onChange={e => setTOD(e.target.value)}/></div>
      </section>
      <button onClick={() => saveCatch()}>Save</button>
    </div>
  )
}

export default Home
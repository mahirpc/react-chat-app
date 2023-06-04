import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import "./join.css"

const Join = () => {
  const [inputs, setInputs] = useState({
    name:"",
    room:""
  })
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setInputs(prevInputs => ({...prevInputs, [name]:value}))
  }
  return (
    <main className="join-outer-container">
        <div className="join-inner-container">
          <h1 className="heading">Join</h1>
          <div className='inputs-container'>
            <label htmlFor="name">Name</label>
            <input type="text" 
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  name='name'
                  id='name'
                  className="join-input"
                  value={inputs.name}
                  required
            />
            <label htmlFor="room">Room</label>
            <input type="text" 
                  placeholder="Enter name of the room"
                  onChange={handleInputChange}
                  name='room'
                  id='room'
                  className="join-input"
                  value={inputs.room}
                  required
            />
            <Link onClick={event => (!inputs.name || !inputs.room) ? event.preventDefault() : null} 
                  to={`/chat?name=${inputs.name}&room=${inputs.room}`}
                  className='signin-button-link'
            >
              <button type='submit' onClick={()=>{}} className='signin-button'>
                Sign In
              </button>
            </Link>
                  
          </div>
        </div>
    </main>
  )
}

export default Join

import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

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
    <main className="flex flex-col justify-center items-center h-screen bg-gray-200">
        <div className="flex flex-col justify-center items-start w-4/5 md:w-3/5 
                        max-w-[500px] lg:w-[500px] px-8 py-2 lg:mx-auto bg-white
                        border border-gray-500 rounded-lg shadow-lg shadow-gray-300"
        >
          <h1 className=" font-serif text-4xl p-2 mx-auto mb-6">Join Room</h1>
          <div className='flex flex-col justify-start items-start w-full'>
            <label htmlFor="name" className="font-sans text-lg font-semibold"> Name </label>
            <input type="text" 
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  name='name'
                  id='name'
                  className=" outline outline-gray-500 rounded-sm p-1 w-100 mt-1 mb-3
                             w-full focus:outline focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  value={inputs.name}
                  required
            />
            <label htmlFor="room" className="font-sans text-lg font-semibold"> Room </label>
            <input type="text" 
                  placeholder="Enter name of the room"
                  onChange={handleInputChange}
                  name='room'
                  id='room'
                  className=" outline outline-gray-500 rounded-sm p-1 w-100 mt-1 mb-3
                              w-full focus:outline focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
                  value={inputs.room}
                  required
            />
            <Link onClick={event => (!inputs.name || !inputs.room) ? event.preventDefault() : null} 
                  to={`/chat?name=${inputs.name}&room=${inputs.room}`}
                  className='w-full'
            >
              <button type='submit' onClick={()=>{}} 
                      className='w-full bg-blue-600 rounded-md p-1 mt-1
                               text-white text-lg font-semibold mb-5'>
                Sign In
              </button>
            </Link>
                  
          </div>
        </div>
    </main>
  )
}

export default Join

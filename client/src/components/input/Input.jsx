import React from 'react'

const Input = ({message,setMessage,sendMessage}) => {
  return (
    <div className='mt-auto pr-4'>
      <input type='text' 
          className='border-2 border-gray-400 rounded-md px-2 m-2
                  text-black font-semibold text-lg w-full'
          value={message} 
          onChange={(e)=>{setMessage(e.target.value)}}
          onKeyDown={event => event.key === 'Enter' ? 
                              sendMessage(event) : 
                              null
                    }  
        />
    </div>
  )
}

export default Input

import React from 'react'

const Input = ({message,setMessage,sendMessage}) => {
  return (
    <form className='mt-auto flex flex-row w-full'>
      <input type='text' 
          className=' py-1 px-2
                  text-black font-semibold text-lg w-full focus:outline-none'
          value={message} 
          onChange={(e)=>{setMessage(e.target.value)}}
          onKeyDown={event => event.key === 'Enter' ? 
                              sendMessage(event) : 
                              null
                    }  
        />
        <button onClick={event => sendMessage(event)} className='bg-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-send-fill mx-3" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg>
        </button>
    </form>
  )
}

export default Input

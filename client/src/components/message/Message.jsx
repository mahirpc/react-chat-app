import React from 'react'

const Message = ({message:{user,text}, name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

  return (
    isSentByCurrentUser ? (
        <div className='flex flex-row justify-end'>
            <p className='pr-10'>
                {trimmedName}
            </p>
            <div className=' bg-blue-500'>
                <p className=' text-white'>{text}</p>
            </div>
        </div>
    ) : 
    (
        <div className='flex flex-row justify-start'>
            <div className=' bg-slate-200'>
                <p className='text-black'>{text}</p>
            </div>
            <p className='pl-10'>{user}</p>
        </div>
    )
  )
}

export default Message

import React from 'react'
import ReactEmoji from 'react-emoji'

const Message = ({message:{user,text}, name}) => {
    let sentBy = "";
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        sentBy = "own";
    } else if (user === "admin"){
        sentBy = "admin";
    } else {
        sentBy = "other";
    }
  return (
    sentBy === "own" ? (
        <div className='flex flex-row justify-end'>
            <p className='pr-10'>
                {trimmedName}
            </p>
            <div className=' bg-blue-500'>
                <p className=' text-white'>{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    ) : sentBy === "other" ? (
        <div className='flex flex-row justify-start'>
            <div className=' bg-slate-200'>
                <p className='text-black'>{ReactEmoji.emojify(text)}</p>
            </div>
            <p className='pl-10'>{user}</p>
        </div>
    ) : (
        <div className='flex flex-row justify-center'>
            <div className=' bg-slate-500'>
                <p className=' text-slate-800'>{ReactEmoji.emojify(text)}</p>
            </div>
            <p className=''>{user}</p>
        </div>
    )
  )
}

export default Message

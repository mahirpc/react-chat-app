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
        <div className='flex flex-row justify-end px-2 mb-1'>
            <div className='flex flex-col justify-start bg-blue-500 px-3 py-0.5 rounded-lg'>
                <p className='text-xs rounded-md ml-auto'>
                    {trimmedName}
                </p>
                <div className='text-sm'>
                    <p className=' text-white'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        </div>
    ) : sentBy === "other" ? (
        <div className='flex flex-row justify-start px-2 mb-1'>
            <div className='flex flex-col justify-start bg-slate-500 px-3 py-0.5 rounded-lg'>
                <p className='text-xs rounded-md mr-auto'>
                    {trimmedName}
                </p>
                <div className='text-sm'>
                    <p className=' text-white'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
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

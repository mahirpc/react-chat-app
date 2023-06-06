import React from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'


const Infobar = ({room}) => {
  return (
    <div className='flex flex-row justify-between 
                    text-white items-center w-auto bg-gray-900 rounded-t-lg
                    py-2'
    >
        <div className='flex flex-row items-center'>
            <img src={onlineIcon} alt='online' className='pr-2 pl-5'/>
            <h3 className='pl-2 font-semibold text-xl'>{room}</h3>
        </div>
        <div className='flex pr-5'>
            <a href='/'><img src={closeIcon} alt='close image'/></a>
        </div>
      
    </div>
  )
}

export default Infobar

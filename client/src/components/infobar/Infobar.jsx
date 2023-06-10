import React, {useState} from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'


const Infobar = ({room, users}) => {
  const [dropdown, setDropdown] = useState(false)
  // const nameOfUsers = users?.map((user)=><li className=' list-none'>{user}</li>);
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
          <div className='flex flex-col justify-start'>
            <p onClick={()=>setDropdown(prevState => !prevState)}
                className='text-white font-semibold cursor-pointer'
            >
              users online
            </p>
            {dropdown && 
              <div className=' absolute top-5 bg-white text-black pl-3 pr-3'>{users}</div>
            }
          </div>
            <a href='/'><img src={closeIcon} alt='close'/></a>
        </div>
      
    </div>
  )
}

export default Infobar

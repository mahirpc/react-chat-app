import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../message/Message'

const Messages = ({messages, name}) => {
  return (
    <ScrollToBottom className=' overflow-auto'>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
  )
}

export default Messages
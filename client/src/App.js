import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import "./style.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Join />} />
            <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

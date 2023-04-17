import { useState } from 'react'
import './App.css'
import Join from './components/join/join'
import Chat from './components/chat/chat'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)

  return (
    <div className="App">
      {
        chatVisibility ? <Chat /> : <Join setChatVisibility={setChatVisibility} />
      }
    </div>
  )
}

export default App

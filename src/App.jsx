import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Countdown from './components/Countdown'
import Invitation from './components/Invitation'
import Gallery from './components/Gallery'
import Guestbook from './components/Guestbook'
import AccoutInfo from './components/AccountInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>  
      <Countdown/>
      <Invitation/>
      <Gallery/>
      <Guestbook/>
      <AccoutInfo/>
    </div>
  )
}

export default App

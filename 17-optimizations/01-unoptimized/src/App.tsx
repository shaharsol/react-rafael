import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const items = Array.from({length: 10})


function App() {

    const [toggle, setToggle] = useState<boolean>(false)
    function changeState() {
        setToggle(!toggle)
    }

  return (
    <div className='App'>
        <p>current toggle: {toggle? 'on' : 'off'}</p>
        <button onClick={changeState}>toggle</button>
        {items.map((item, idx) => <InnerComponent key={idx}/>)}
    </div>
  )
}

function InnerComponent() {
    const time = (new Date()).toLocaleTimeString()
    return (
        <div className='InnerComponent'>
            {time}
        </div>
    )
}

export default App

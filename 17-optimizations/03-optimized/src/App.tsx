import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const items = Array.from({length: 10})

const CachedSlowComponent = memo(SlowComponent)

function App() {

    const [toggle, setToggle] = useState<boolean>(false)
    function changeState() {
        setToggle(!toggle)
    }

  return (
    <div className='App'>
        <p>current toggle: {toggle? 'on' : 'off'}</p>
        <button onClick={changeState}>toggle</button>
        {items.map((item, idx) => <CachedSlowComponent key={idx}/>)}
    </div>
  )
}

function SlowComponent() {
    const startTime = performance.now()
    while(performance.now() - startTime < 100) {
        // do nothing
    }
    const time = (new Date()).toLocaleTimeString()
    return (
        <div className='SlowComponent'>
            {time}
        </div>
    )
}

export default App

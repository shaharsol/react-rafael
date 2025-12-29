import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const items = Array.from({length: 10})

const CachedSlowComponent = memo(SlowComponent)

function App() {


    const [counter, setCounter] = useState<number>(0)

    function increment() {
        setCounter(counter + 1)
    }

    const [toggle, setToggle] = useState<boolean>(false)
    function changeState() {
        setToggle(!toggle)
    }

  return (
    <div className='App'>
        <p>counter: {counter}</p>
        <p>current toggle: {toggle? 'on' : 'off'}</p>
        <button onClick={changeState}>toggle</button>
        {items.map((item, idx) => <CachedSlowComponent 
                                        value={idx} 
                                        key={idx}
                                        increment={increment}
                                    />)}
    </div>
  )
}

interface SlowComponentProps {
    value: number
    increment(counter: number): void
}
function SlowComponent(props: SlowComponentProps) {
    const startTime = performance.now()
    while(performance.now() - startTime < 100) {
        // do nothing
    }
    const time = (new Date()).toLocaleTimeString()
    return (
        <div className='SlowComponent'>
            {props.value} | {time}
        </div>
    )
}

export default App

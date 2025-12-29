import { memo, useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const items = Array.from({length: 10})

// const CachedSlowComponent = memo(SlowComponent)
interface User {
    id: number,
    name: string
}
function App() {

    const [userId, setUserId] = useState<number>(Math.random() * 100) 
    const user: User = {
        id: userId ,
        name: 'Eliran'
    }

    // const cachedUser = useMemo(() => {
    //     return user
    // }, [])

    const [counter, setCounter] = useState<number>(0)

    function increment() {
        setCounter(counter + 1)
    }

    // const increment = useCallback(() => {
    //     setCounter(x => x + 1)
    // }, [])

    const [toggle, setToggle] = useState<boolean>(false)
    function changeState() {
        setToggle(!toggle)
        setUserId(Math.random() * 100)
    }

  return (
    <div className='App'>
        <p>counter: {counter}</p>
        <p>current toggle: {toggle? 'on' : 'off'}</p>
        <button onClick={changeState}>toggle</button>
        {items.map((item, idx) => <SlowComponent 
                                        value={idx} 
                                        key={idx}
                                        increment={increment}
                                        user={user}
                                    />)}
    </div>
  )
}

interface SlowComponentProps {
    value: number
    increment(counter: number): void
    user: User
}
function SlowComponent(props: SlowComponentProps) {
    const startTime = performance.now()
    while(performance.now() - startTime < 100) {
        // do nothing
    }
    const time = (new Date()).toLocaleTimeString()
    return (
        <div className='SlowComponent'>
            {props.value} | {time} | {props.user.id}
        </div>
    )
}

export default App

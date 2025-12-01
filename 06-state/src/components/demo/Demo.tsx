import { useEffect, useRef, useState } from 'react'
import './Demo.css'

export default function Demo() {

    // const startedAt = (new Date()).toLocaleTimeString()
    const startedAt = useRef<string>((new Date()).toLocaleTimeString())
    const [ now, setNow ] = useState<string>((new Date()).toLocaleTimeString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('in setInterval...')
            setNow((new Date()).toLocaleTimeString())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    // 3 useEffect patterns depending on 2nd argument:
    // ================================================
    // 1. pass no argument - the effect will run with each re-render
    // 2. pass an empty array - the effect will run ONLY on 1st render
    // 3. pass a non empty array containing state vars - the effect will run
    //      whenever a "watched" state var changes


    return (
        <div className='Demo'>
            <h1>{startedAt.current}</h1>
            <h1>{now}</h1>
        </div>
    )
}
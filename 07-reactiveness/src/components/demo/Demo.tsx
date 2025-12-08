import { useEffect, useRef, useState } from 'react'
import './Demo.css'


function getDogs() {
    return ['Sandy', 'Tsuki', 'Rolo']
}

function getCats() {
    return ['Prezel', 'Mickey', 'Mitzi']
}

export default function Demo() {

    const [ animals, setAnimals ] = useState<string[]>([])
    const [ isDogs, setDogs ] = useState<boolean>(true)

    function toggle() {
        setDogs(!isDogs)
    }

    useEffect(() => {
        setAnimals(isDogs ?  getDogs() : getCats())
    }, [ isDogs ])

    return (
        <div className='Demo'>
            <select onChange={toggle}>
                <option value="dogs" selected={isDogs}>dogs</option>
                <option value="cats" selected={!isDogs}>cats</option>
            </select>
            <ul>
                {animals.map(animal => <li key={animal}>{animal}</li>)}
            </ul>
        </div>
    )
}
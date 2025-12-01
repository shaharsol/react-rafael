import './Demo.css'


export default function Demo() {

    let name: string = 'Eliad'
    let age: number = 28
    let isMale: boolean = true

    const grades = [92, 96, 88]

    function getIsSmoking(username: string) {
        if (name === username) return 'yes'
        return 'no'
    }


    function ShowSomeMarkeup() {

        //...

        // ...
        return <p>here is markeup </p>
    }

    function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget
        alert('i was clicked')

    }

    return (
        <div className='Demo'>
            <p>name is {name}</p>
            <p>age is {age}</p>

            {/* ternary operator */}
            <p>male? {isMale ? 'yes' : 'no'}</p>

            {/* conditional rendering */}
            {isMale && <p>he is a man</p>}

            <p>isSmoling? {getIsSmoking('Roman')}</p>

            {!isMale && <div>she is a woman</div>}

            <ul>
                <p>grades:</p>

                {grades.map((g) => <li key={g}>{g}</li>)}
            </ul>

            <ShowSomeMarkeup />

            <button onClick={clickHandler}>click me</button>

        </div>
    )
}
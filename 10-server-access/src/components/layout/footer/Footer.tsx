import './Footer.css'

export default function Footer() {
    return (
        <div className='Footer'>
            <div>(c) Rafael </div>
            <div>Server: {import.meta.env.VITE_REST_SERVER_URL}</div>
        </div>
    )
}
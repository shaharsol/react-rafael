import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className='Header'>
            <div>Logo</div>
            <nav>
                <NavLink to="/profile">profile</NavLink>
                &nbsp;|&nbsp;
                <NavLink to="/feed">feed</NavLink>
                &nbsp;|&nbsp;
                <NavLink to="/search">search</NavLink>
            </nav>
            <div>welcome shahar | logout</div>
        </div>
    )
}
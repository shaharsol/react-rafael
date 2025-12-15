import './Follow.css'
import profilePicSrc from '../../../assets/profile-pic.jpg'
import type User from '../../../models/User'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const { name } = props.user

    return (
        <div className='Follow'>
            <img src={profilePicSrc} />
            <div>{name}</div>
        </div>
    )
}
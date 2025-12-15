import './Follow.css'
import profilePicSrc from '../../../assets/profile-pic.jpg'
import type User from '../../../models/User'
import followingService from '../../../services/following'

interface FollowProps {
    user: User
    isFollowing?: boolean
    unfollow?(id: string): void
}
export default function Follow(props: FollowProps) {

    const { id, name } = props.user
    const { isFollowing, unfollow } = props

    async function unfollowMe() {
        try {
            await followingService.unfollow(id)
            unfollow!(id)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='Follow'>
            <img src={profilePicSrc} />
            <div>{name}</div>
            {isFollowing && <button onClick={unfollowMe}>unfollow</button>}
        </div>
    )
}
import './Follow.css'
import profilePicSrc from '../../../assets/profile-pic.jpg'
import type User from '../../../models/User'
import followingService from '../../../services/following'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useState } from 'react'

interface FollowProps {
    user: User
    isFollowing?: boolean
    unfollow?(id: string): void
}
export default function Follow(props: FollowProps) {

    const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false)

    const { id, name } = props.user
    const { isFollowing, unfollow } = props

    async function unfollowMe() {
        try {
            setIsSubmitting(true)
            await followingService.unfollow(id)
            unfollow!(id)
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='Follow'>
            <img src={profilePicSrc} />
            <div>{name}</div>
            {isFollowing && <SpinnerButton 
                onClick={unfollowMe}
                buttonText='Unfollow'
                spinningText='Unfollowing'
                isSpinning={isSubmitting}
            />}
        </div>
    )
}
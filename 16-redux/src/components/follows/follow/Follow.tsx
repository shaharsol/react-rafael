import './Follow.css'
import profilePicSrc from '../../../assets/profile-pic.jpg'
import type User from '../../../models/User'
// import followingService from '../../../services/following'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useState } from 'react'
import useService from '../../../hooks/use-service'
import { FollowingService } from '../../../services/auth-aware/following'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { follow, unfollow } from '../../../redux/following-slice'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const dispatch = useAppDispatch()
    const { id, name } = props.user
    const isFollowing = useAppSelector(state => state.followingSlice.following.findIndex(f => f.id === id) > - 1)

    const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false)

    const followingService = useService(FollowingService)

    async function followMe() {
        try {
            setIsSubmitting(true)
            await followingService.follow(id)
            // unfollow!(id)
            dispatch(follow(props.user))
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }

    }
    async function unfollowMe() {
        try {
            setIsSubmitting(true)
            await followingService.unfollow(id)
            // unfollow!(id)
            dispatch(unfollow({id}))
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
            {!isFollowing && <SpinnerButton 
                onClick={followMe}
                buttonText='Follow'
                spinningText='Following'
                isSpinning={isSubmitting}
            />}
        </div>
    )
}
import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/User'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Spinner from '../../common/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { populate, unfollow as unfollowDispatch } from '../../../redux/following-slice'

export default function Following () {

    // const [ following, setFollowing] = useState<User[]>([])

    const following = useAppSelector(state => state.followingSlice.following)
    const dispatch = useAppDispatch()

    useEffect(() => {
        followingService.getFollowing()
            .then(following => {
                dispatch(populate(following))
            })
            .catch(e => alert(e.message))
    }, [])

    function unfollow(id: string) {
        dispatch(unfollowDispatch({id}))
    }

    return (
        <div className='Following'>

            {following.length === 0 && <Spinner />}

            {following.length > 0 && <>
                <h2>I am following:</h2>
                <div className='list'>
                    {following.map(f => <Follow 
                        key={f.id} 
                        user={f}
                        isFollowing={true}
                        unfollow={unfollow}
                    />)}
                </div>
            </>}

        </div>
    )
}

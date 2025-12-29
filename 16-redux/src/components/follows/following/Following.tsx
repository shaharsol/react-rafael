import { useEffect } from 'react'
import './Following.css'
// import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Spinner from '../../common/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { populate } from '../../../redux/following-slice'
import useService from '../../../hooks/use-service'
import { FollowingService } from '../../../services/auth-aware/following'

export default function Following () {

    // const [ following, setFollowing] = useState<User[]>([])

    const following = useAppSelector(state => state.followingSlice.following)
    const dispatch = useAppDispatch()

    const followingService = useService(FollowingService)

    useEffect(() => {
        followingService.getFollowing()
            .then(following => {
                dispatch(populate(following))
            })
            .catch(e => alert(e.message))
    }, [])

    return (
        <div className='Following'>

            {following.length === 0 && <Spinner />}

            {following.length > 0 && <>
                <h2>I am following:</h2>
                <div className='list'>
                    {following.map(f => <Follow 
                        key={f.id} 
                        user={f}
                    />)}
                </div>
            </>}

        </div>
    )
}

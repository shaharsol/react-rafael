import { useEffect } from 'react'
import './Profile.css'
// import profileService from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Spinner from '../../common/spinner/Spinner'
import useService from '../../../hooks/use-service'
import ProfileService from '../../../services/auth-aware/ProfileService'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { populate } from '../../../redux/profile-slice'

export default function Profile() {

    // const [ posts, setPosts] = useState<PostModel[]>([])
    const posts = useAppSelector(store => store.profileSlice.posts)
    const dispatch = useAppDispatch()
    const profileService = useService(ProfileService)



    useEffect(() => {

        // IIFE immediately invoked function expression
        // (async () => {
        //     const posts = await profileService.getProfile()

        // })()
        profileService.getProfile()
            .then(posts => { dispatch(populate(posts)) })
            .catch(e => alert(e.message))
    }, [])

    return (
        <div className='Profile'>

            {posts.length === 0 && <Spinner />}

            {posts.length > 0 && <>
                <NewPost />
                {posts.map(p => <Post 
                    key={p.id} 
                    post={p} 
                    readOnly={false}
                />)}
            </>}
        </div>
    )
}
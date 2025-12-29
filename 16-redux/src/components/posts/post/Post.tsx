import { useNavigate } from 'react-router-dom'
import type PostModel from '../../../models/Post'
// import profileService from '../../../services/profile'
import Comments from '../comments/Comments'
import './Post.css'
import { useAppDispatch } from '../../../redux/hooks'
import { remove } from '../../../redux/profile-slice'
import useService from '../../../hooks/use-service'
import ProfileService from '../../../services/auth-aware/ProfileService'

interface PostProps {
    post: PostModel
    readOnly: boolean
}
export default function Post(props: PostProps) {

    const { id, title, body, user: { name }, createdAt, imageUrl, comments } = props.post
    const { readOnly } = props 

    const dispatch = useAppDispatch()
    // for intended navigation you can use useNavigate
    const navigate = useNavigate()

    const profileService = useService(ProfileService)

    async function removeMe() {
        try {
            await profileService.removePost(id)        
            // now post is no longer in the server
            // i want to change the UI state to reflect that
            dispatch(remove({id}))
        } catch (e) {
            alert(e)
        }
    }

    function editMe() {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='Post'>
            <h3>{title}</h3>
            <h5>by {name} on {(new Date(createdAt)).toLocaleDateString()}</h5>
            <img src={imageUrl} />
            <div>
                {body}
            </div>
            
            {!readOnly && 
                <div>
                    <button onClick={removeMe}>delete</button>
                    <button onClick={editMe}>edit</button>
                </div>
            }

            <Comments 
                comments={comments}
                postId={id}
            />
            
        </div>
    )
}
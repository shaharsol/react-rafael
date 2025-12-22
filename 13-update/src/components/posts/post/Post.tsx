import { useNavigate } from 'react-router-dom'
import type PostModel from '../../../models/Post'
import type PostComment from '../../../models/PostComment'
import profileService from '../../../services/profile'
import Comments from '../comments/Comments'
import './Post.css'

interface PostProps {
    post: PostModel
    readOnly: boolean
    removePost?(id: string): void
    commentCreated(postComment: PostComment): void
}
export default function Post(props: PostProps) {

    const { id, title, body, user: { name }, createdAt, imageUrl, comments } = props.post
    const { readOnly, removePost, commentCreated } = props 

    // for intended navigation you can use useNavigate
    const navigate = useNavigate()

    async function removeMe() {
        try {
            await profileService.removePost(id)        
            // now post is no longer in the server
            // i want to change the UI state to reflect that
            if(removePost) removePost(id)
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
                commentCreated={commentCreated}
            />
            
        </div>
    )
}
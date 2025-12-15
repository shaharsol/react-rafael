import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import './Post.css'

interface PostProps {
    post: PostModel
    readOnly: boolean
    removePost?(id: string): void
}
export default function Post(props: PostProps) {

    const { id, title, body, user: { name }, createdAt, imageUrl } = props.post
    const { readOnly, removePost } = props 

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
                </div>
            }
            
        </div>
    )
}
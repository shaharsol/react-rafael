import type PostModel from '../../../models/Post'
import './Post.css'

interface PostProps {
    post: PostModel
}
export default function Post(props: PostProps) {

    const { title, body, user: { name }, createdAt, imageUrl } = props.post

    return (
        <div className='Post'>
            <h3>{title}</h3>
            <h5>by {name} on {(new Date(createdAt)).toLocaleDateString()}</h5>
            <img src={imageUrl} />
            <div>
                {body}
            </div>
        </div>
    )
}
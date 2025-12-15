import type PostCommentModel from '../../../models/PostComment'
import './PostComment.css'

interface PostCommentProps {
    postComment: PostCommentModel
}
export default function PostComment(props: PostCommentProps) {

    const { body, user: { name }, createdAt } = props.postComment

    return (
        <div className='PostComment'>
            <div className="by-line">by {name} on {(new Date(createdAt)).toLocaleDateString()}</div>
            <div>{body}</div>
        </div>
    )
}
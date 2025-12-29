import type PostCommentModel from '../../../models/PostComment'
import NewComment from '../new-comment/NewComment'
import PostComment from '../post-comment/PostComment'
import './Comments.css'

interface CommentsProps {
    comments: PostCommentModel[]
    postId: string
}
export default function Comments(props: CommentsProps) {

    const { comments, postId } = props

    return (
        <div className='Comments'>
            {comments.map(c => <PostComment 
                key={c.id}
                postComment={c} 
            />)}

            <NewComment 
                postId={postId} 
            />
        </div>
    )
}
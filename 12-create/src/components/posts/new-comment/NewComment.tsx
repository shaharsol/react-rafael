import { useForm } from 'react-hook-form'
import './NewComment.css'
import type PostCommentDraft from '../../../models/PostCommentDraft'
import commentsService from '../../../services/comments'
import type PostComment from '../../../models/PostComment'

interface NewCommentsProps {
    postId: string
    commentCreated(postComment: PostComment): void
}
export default function NewComment(props: NewCommentsProps) {

    const { postId, commentCreated } = props

    const {handleSubmit, register} = useForm<PostCommentDraft>()

    async function createComment(draft: PostCommentDraft) {
        try {
            const newComment = await commentsService.newComment(postId, draft)
            commentCreated(newComment)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(createComment)}>
                <textarea {...register('body')}></textarea>
                <button>Submit Comment</button>
            </form>
        </div>
    )
}
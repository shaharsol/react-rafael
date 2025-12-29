import { useForm } from 'react-hook-form'
import './NewComment.css'
import type PostCommentDraft from '../../../models/PostCommentDraft'
// import commentsService from '../../../services/comments'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useAppDispatch } from '../../../redux/hooks'
import { addComment } from '../../../redux/profile-slice'
import useService from '../../../hooks/use-service'
import { CommentsService } from '../../../services/auth-aware/comments'

interface NewCommentsProps {
    postId: string
}
export default function NewComment(props: NewCommentsProps) {

    const commentsService = useService(CommentsService)
    const { postId } = props

    const dispatch = useAppDispatch()
    const {handleSubmit, register, formState, reset } = useForm<PostCommentDraft>()

    async function createComment(draft: PostCommentDraft) {
        try {
            const newComment = await commentsService.newComment(postId, draft)
            reset()
            // commentCreated(newComment)
            dispatch(addComment(newComment))
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(createComment)}>
                <textarea {...register('body')}></textarea>
                <SpinnerButton 
                    isSpinning={formState.isSubmitting}
                    buttonText='Add Comment'
                    spinningText='Adding comment'                    
                />
            </form>
        </div>
    )
}
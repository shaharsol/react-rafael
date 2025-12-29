import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/PostDraft'
// import profileService from '../../../services/profile'
import './NewPost.css'
import { useState } from 'react'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useAppDispatch } from '../../../redux/hooks'
import { add } from '../../../redux/profile-slice'
import useService from '../../../hooks/use-service'
import ProfileService from '../../../services/auth-aware/ProfileService'

export default function NewPost() {
    const dispatch = useAppDispatch()
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>()

    const [ isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const profileService = useService(ProfileService)
    async function createPost(draft: PostDraft) {
        try {
            setIsSubmitting(true)
            const newPost = await profileService.createPost(draft)
            reset()
            // postCreated(newPost)
            dispatch(add(newPost))
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(createPost)}>
                <input placeholder="enter title..." {...register('title', {
                    required: {
                        value: true,
                        message: 'this field is required'
                    },
                    minLength: {
                        value: 10,
                        message: 'u must enter at least 10 chars yo'
                    }
                })} />
                <div className="error">{formState.errors.title?.message}</div>
                <textarea placeholder="enter post..." {...register('body')}></textarea>
                <SpinnerButton 
                    isSpinning={isSubmitting}
                    buttonText='Add Post'
                    spinningText='Adding post'
                />

            </form>
        </div>
    )
}
import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/PostDraft'
import profileService from '../../../services/profile'
import './NewPost.css'
import type Post from '../../../models/Post'

interface NewPostProps {
    postCreated(post: Post): void
}
export default function NewPost(props: NewPostProps) {

    const { postCreated } = props
    const { handleSubmit, register, formState } = useForm<PostDraft>()

    async function createPost(draft: PostDraft) {
        // console.log(draft)
        const newPost = await profileService.createPost(draft)
        postCreated(newPost)
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
                <button>Submit</button>
            </form>
        </div>
    )
}
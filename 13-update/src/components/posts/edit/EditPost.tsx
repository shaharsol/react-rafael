import { useEffect, type JSX } from 'react'
import './EditPost.css'
import { useNavigate, useParams } from 'react-router-dom'
import Profile from '../profile/Profile'
import profileService from '../../../services/profile'
import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/PostDraft'

// the explicit return of a component must be JSX.Element
// a function that returns JSX.Element is surely a component
export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>()

    useEffect(() => {
        (async () => {
            try {
                const post = await profileService.getPost(id!)
                // const { title, body } = post
                // reset ({ title, body })

                // more explicit: 
                const draft: PostDraft = {
                    title: post.title,
                    body: post.body
                }
                reset(draft)
            } catch (e) {
                alert(e)
            }

        })()
    }, [])

    const navigate = useNavigate()

    async function updatePost(draft: PostDraft) {
        try {
            await profileService.editPost(id!, draft)
            navigate('/profile')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='EditPost'>
            <form onSubmit={handleSubmit(updatePost)}>
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
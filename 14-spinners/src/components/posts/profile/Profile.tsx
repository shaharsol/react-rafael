import { useEffect, useState } from 'react'
import './Profile.css'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import type PostComment from '../../../models/PostComment'
import Spinner from '../../common/spinner/Spinner'

export default function Profile() {

    const [ posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {

        // IIFE immediately invoked function expression
        // (async () => {
        //     const posts = await profileService.getProfile()

        // })()
        profileService.getProfile()
            .then(setPosts)
            .catch(e => alert(e.message))
    }, [])


    function removePost(id: string): void {
        setPosts(posts.filter(p => p.id !== id))
    }

    function addPost(newPost: PostModel) {
        setPosts([newPost, ...posts])
    }

    function commentCreated(postComment: PostComment) {
        console.log(postComment)
        const clone = [...posts]
        const index = clone.findIndex(p => p.id === postComment.postId)
        if(index > -1) {
            clone[index].comments.push(postComment)
        }

        // posts.find(p => p.id === postComment.postId)!.comments.unshift(postComment)
        setPosts(clone)
    }

    return (
        <div className='Profile'>

            {posts.length === 0 && <Spinner />}

            {posts.length > 0 && <>
                <NewPost postCreated={addPost} />
                {posts.map(p => <Post 
                    key={p.id} 
                    post={p} 
                    readOnly={false}
                    removePost={removePost}
                    commentCreated={commentCreated}
                />)}
            </>}
        </div>
    )
}
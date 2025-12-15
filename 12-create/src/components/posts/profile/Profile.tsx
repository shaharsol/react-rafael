import { useEffect, useState } from 'react'
import './Profile.css'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'

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

    return (
        <div className='Profile'>
            <NewPost postCreated={addPost} />
            {posts.map(p => <Post 
                key={p.id} 
                post={p} 
                readOnly={false}
                removePost={removePost}
            />)}
        </div>
    )
}
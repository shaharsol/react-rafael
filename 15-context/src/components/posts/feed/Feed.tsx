import { useEffect, useState } from 'react'
import './Feed.css'
import type PostModel from '../../../models/Post'
import feedService from '../../../services/feed'
import Post from '../post/Post'
import Spinner from '../../common/spinner/Spinner'

export default function Feed() {

    let [ posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {

        // IIFE immediately invoked function expression
        // (async () => {
        //     const posts = await profileService.getProfile()

        // })()
        feedService.getFeed()
            .then(setPosts)
            .catch(e => alert(e.message))
    }, [])
    
    return (
        <div className='Feed'>

            {posts.length === 0 && <Spinner />}

            {posts.length > 0 && <>
                {posts.map(p => <Post 
                    key={p.id} 
                    post={p} 
                    readOnly={true}
                />)}
            </>}

        </div>
    )
}
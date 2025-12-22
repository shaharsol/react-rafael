import axios from "axios"
import type Post from "../models/Post"
import type PostDraft from "../models/PostDraft"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const { data } = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return data
    }

    async getPost(id: string): Promise<Post> {
        const { data } = await axios.get<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return data
    }

    async removePost(id: string): Promise<boolean> {
        const { data } = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return data
    } 

    async createPost(draft: PostDraft): Promise<Post> {
        const { data } = await axios.post<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`, draft)
        return data
    }

    async editPost(id: string, draft: PostDraft): Promise<Post> {
        const { data } = await axios.patch<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`, draft)
        return data
    }

}

const profileService = new ProfileService()
export default profileService


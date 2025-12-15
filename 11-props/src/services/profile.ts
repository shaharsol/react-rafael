import axios from "axios"
import type Post from "../models/Post"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const { data } = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return data
    }

    async removePost(id: string): Promise<boolean> {
        const { data } = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return data
    } 
}

const profileService = new ProfileService()
export default profileService


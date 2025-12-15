import axios from "axios"
import type User from "../models/User"

class FollowingService {
    async getFollowing(): Promise<User[]> {
        const { data } = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return data
    }

    async unfollow(id: string): Promise<boolean> {
        const { data } = await axios.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${id}`)
        return data
    }
}

const followingService = new FollowingService()
export default followingService


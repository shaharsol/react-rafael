import type User from "../../models/User"
import AuthAware from "./AuthAware"

export class FollowingService extends AuthAware{
    async getFollowing(): Promise<User[]> {
        const { data } = await this.axiosInstance.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return data
    }

    async unfollow(id: string): Promise<boolean> {
        const { data } = await this.axiosInstance.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${id}`)
        return data
    }

    async follow(id: string): Promise<boolean> {
        const { data } = await this.axiosInstance.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${id}`)
        return data
    }

}



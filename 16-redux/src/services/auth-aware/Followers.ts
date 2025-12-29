import type User from "../../models/User"
import AuthAware from "./AuthAware"

export class FollowersService extends AuthAware{
    async getFollowers(): Promise<User[]> {
        const { data } = await this.axiosInstance.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`)
        return data
    }
}

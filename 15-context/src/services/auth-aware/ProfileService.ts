import type Post from "../../models/Post";
import AuthAware from "./AuthAware";

export default class ProfileService extends AuthAware {
    async getProfile(): Promise<Post[]> {
        const { data } = await this.axiosInstance.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return data
    }

}
import type Post from "../../models/Post";
import AuthAware from "./AuthAware";

export default class FeedService extends AuthAware {
    async getFeed(): Promise<Post[]> {
        const { data } = await this.axiosInstance.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/feed`)
        return data
    }
}
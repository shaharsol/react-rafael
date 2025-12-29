import type Post from "../../models/Post";
import type PostDraft from "../../models/PostDraft";
import AuthAware from "./AuthAware";

export default class ProfileService extends AuthAware {
    async getProfile(): Promise<Post[]> {
        const { data } = await this.axiosInstance.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return data
    }

    async getPost(id: string): Promise<Post> {
        const { data } = await this.axiosInstance.get<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return data
    }

    async removePost(id: string): Promise<boolean> {
        const { data } = await this.axiosInstance.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return data
    } 

    async createPost(draft: PostDraft): Promise<Post> {
        const { data } = await this.axiosInstance.post<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`, draft)
        return data
    }

    async editPost(id: string, draft: PostDraft): Promise<Post> {
        const { data } = await this.axiosInstance.patch<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`, draft)
        return data
    }

}
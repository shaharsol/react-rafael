import type PostCommentDraft from "../../models/PostCommentDraft"
import type PostComment from "../../models/PostComment"
import AuthAware from "./AuthAware"

export class CommentsService extends AuthAware {
    async newComment(postId: string, draft: PostCommentDraft): Promise<PostComment> {
        const { data } = await this.axiosInstance.post<PostComment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft)
        return data
    }
}



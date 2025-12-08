import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "../../posts/profile/Profile";
import Feed from "../../posts/feed/Feed";

export default function Main() {
    return (
        <Routes>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/" element={<Navigate to="/profile" />}/>
            <Route path="/feed" element={<Feed />}/>
            <Route path="*" element={<h1>not found</h1>} />
        </Routes>
    )
}
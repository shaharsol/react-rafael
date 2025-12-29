import { configureStore } from "@reduxjs/toolkit";
import { followingSlice } from "./following-slice";
import { profileSlice } from "./profile-slice";

const store = configureStore({
    reducer: {
        followingSlice: followingSlice.reducer,
        profileSlice: profileSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
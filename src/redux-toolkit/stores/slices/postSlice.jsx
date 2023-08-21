import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '@api'

const initialState = {
    posts: []
}
const findAllPosts = createAsyncThunk(
    "posts/findAll",
    async () => {
        const res = await api.post.findAll()
        return res.data
    }
)
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addNew: (state, action ) => {
            return {
                ...state,
                posts: [...state.posts, action.payload ]
            }
        }
    },
    extraReducers: {
        [findAllPosts.pending]: (state, action) => {
            console.log("🚀 ~ file: postSlice.jsx:27 ~ action:", action)
            state.loading = true
        },
        [findAllPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload
        },
        [findAllPosts.rejected]: (state, action) => {
            state.loading = false;
            state.posts = action.payload
        }
    }
})

export const postActions = {
    ...postSlice.actions,
    findAllPosts
}
export default postSlice.reducer
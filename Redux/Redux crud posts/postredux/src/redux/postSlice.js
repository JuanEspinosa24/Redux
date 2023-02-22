import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    posts:[

        {
            id: uuidv4(),
            img: "https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg",
            title: "title1",
            description: "description1",
        },

    ],
};

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        addPost:(state,action)=>{
            state.posts.push({...action.payload, id:uuidv4()})
        },

        delPost:(state,action)=>{
            state.posts = state.posts.filter((post)=> post.id !== action.payload);
        },

        putPost:(state,action)=> {
            state.posts = state.posts.map(post=>post.id===action.payload.id? action.payload:post);
        },
    },
});

export const {addPost,delPost,putPost} = postSlice.actions;

export default postSlice.reducer;
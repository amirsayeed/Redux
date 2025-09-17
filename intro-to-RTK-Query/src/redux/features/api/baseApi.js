import {
    fetchBaseQuery
} from "@reduxjs/toolkit/query";
import {
    createApi
} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        setPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
        })
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useSetPostMutation
} = baseApi;
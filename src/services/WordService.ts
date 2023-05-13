import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IWord} from "types";

export const wordAPI = createApi({
    reducerPath: 'wordAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Word'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IWord[], number>({
            query: (limit = 5) => ({
                url: `/words`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: () => ['Word']
        }),
        createPost: build.mutation<IWord, IWord>({
            query: (word) => ({
                url: `/words`,
                method: 'POST',
                body: word
            }),
            invalidatesTags: ['Word']
        }),
        updatePost: build.mutation<IWord, IWord>({
            query: (word) => ({
                url: `/words/${word.id}`,
                method: 'PUT',
                body: word
            }),
            invalidatesTags: ['Word']
        }),
        deletePost: build.mutation<IWord, IWord>({
            query: (word) => ({
                url: `/words/${word.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Word']
        }),
    })
})

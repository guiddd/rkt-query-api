import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const pokeApi = createApi({
    reducerPath: "poke",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
      getPoke: builder.query({
        query: () => `users`,
      }),
    }),
  });
  
  export const { useGetPokeQuery } = pokeApi;
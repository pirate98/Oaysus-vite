/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// console.log({ google: process.env });
export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.PROD
      ? import.meta.env.VITE_BACKEND_AWS
      : import.meta.env.VITE_BACKEND_LOCAL,
  }),
  endpoints: (builder) => ({
    getSeedData: builder.query({
      query: () => `seed`,
    }),
  }),
});

export const { useGetSeedDataQuery } = backendApi;

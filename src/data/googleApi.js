/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// console.log({ google: process.env });
export const googleApi = createApi({
  reducerPath: "googleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/" }),
  endpoints: (builder) => ({
    getFonts: builder.query({
      query: () =>
        `webfonts/v1/webfonts?key=${import.meta.env.VITE_GOOGLE_API}`,
    }),
  }),
});

export const { useGetFontsQuery } = googleApi;

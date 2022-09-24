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
      transformResponse: (response, meta, arg) => {
        console.log(response);
        response.data;
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        console.log("google fonts query");
        const response = await queryFulfilled;
        console.log({ response });
      },
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        }
      ) {
        console.log("google");
      },
    }),
  }),
});

export const { useGetFontsQuery } = googleApi;

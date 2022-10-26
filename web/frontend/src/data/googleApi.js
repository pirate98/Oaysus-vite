/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const googleApi = createApi({
  reducerPath: "googleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/" }),
  endpoints: (builder) => ({
    getFonts: builder.query({
      query: () =>
        `webfonts/v1/webfonts?key=${import.meta.env.VITE_GOOGLE_API}`,
      transformResponse: (response, meta, arg) => {
        // console.log(response);
        // console.log("response 3");
        const filteredResponse = response.items.map((item) => {
          const { family, variants } = item;
          return { family, variants };
        });

        return filteredResponse;
      },
    }),
  }),
});

export const { useGetFontsQuery } = googleApi;

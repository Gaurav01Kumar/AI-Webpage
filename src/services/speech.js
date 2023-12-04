import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const rapidApiKey = import.meta.env.VITE_RAPID_SPEECH_KEY;

export const speechApi = createApi({
  reducerPath: "speechApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://text-to-speech-api3.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers["X-RapidAPI-Key"] = rapidApiKey;
      headers["X-RapidAPI-Host"] = "text-to-speech-api3.p.rapidapi.com";
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAudio: builder.query({
      query: (params) =>
        `speak?text=${encodeURIComponent(params.text)}&lang="en"`,
    }),
  }),
});

export const { useLazyGetAudioQuery } = speechApi;

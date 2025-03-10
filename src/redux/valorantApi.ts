import { generateRandomMatches } from "@/utils/matchesGenerator";
import { generateFakePlayers } from "@/utils/playersGenerator";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const valorantApi = createApi({
  reducerPath: "valorantApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.henrikdev.xyz/",
    prepareHeaders: (headers) => {
      headers.set("X-API-Key", "7ab1cece-0efd-497d-8da8-21e72725cc6b");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLeaderboard: builder.query({
      query: ({ start = 0, region = "eu" }) => ({
        url: `valorant/v2/leaderboard/${region}`,
        params: { start: `${start}` },
      }),
      transformResponse: (response: any, meta, arg) => {
        if (!response || response.errors) {
          console.warn("API request failed, using fake leaderboard data");
          return { players: generateFakePlayers(30, arg.region) };
        }
        return response;
      },
      transformErrorResponse: (error: any, meta, arg) => {
        console.error("API Error (Leaderboard):", error);
        return { fallbackPlayers: generateFakePlayers(30, arg.region) };
      },
    }),

    getMatches: builder.query({
      query: ({ region, name, tag }) => ({
        url: `valorant/v3/matches/${region}/${name}/${tag}`,
      }),
      transformResponse: (response: any, meta, arg) => {
        if (!response || response.errors) {
          console.warn("API request failed, using fake match data");
          return { data: generateRandomMatches(10, arg.name, arg.tag, arg.region) };
        }
        return response;
      },
      transformErrorResponse: (error: any, meta, arg) => {
        console.error("API Error (Matches):", error);
        return { ...error, data: generateRandomMatches(10, arg.name, arg.tag, arg.region) };
      },
    }),
  }),
});

export const { useGetLeaderboardQuery, useGetMatchesQuery } = valorantApi;
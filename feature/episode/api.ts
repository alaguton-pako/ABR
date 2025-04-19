"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { EpisodeListResponse, EpisodeByIdResponse } from "./types";

export const useGetLatestEpisodes = (page: number = 1, perPage: number = 15) =>
  useQuery<EpisodeListResponse>({
    queryKey: ["latestEpisodes", page, perPage],
    queryFn: async () => {
      const { data } = await axios.get<EpisodeListResponse>(
        `/episodes/latest?page=${page}&per_page=${perPage}`
      );
      return data;
    },
    // keepPreviousData: true,
  });

export const useGetEpisodeById = (id: number | string) =>
  useQuery<EpisodeByIdResponse>({
    queryKey: ["episode", id],
    queryFn: async () => {
      const { data } = await axios.get(`/episodes/${id}`);
      return data;
    },
    enabled: !!id,
  });

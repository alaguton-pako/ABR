"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { PodCastByIdResponse, PodcastResponse } from "./types";
import { EpisodeListResponse } from "../episode/types";

export const useGetTopPodcasts = () => {
  return useQuery<PodcastResponse>({
    queryKey: ["topPodcasts"],
    queryFn: async () => {
      const { data } = await axios.get("/top-podcasts?page=1&per_page=15");
      return data;
    },
  });
};

export const useGetPodcastEpisodes = (
  id: number | string,
  page = 1,
  perPage = 15
) =>
  useQuery<EpisodeListResponse>({
    queryKey: ["podcastEpisodes", id, page, perPage],
    queryFn: async () => {
      const { data } = await axios.get(
        `/podcasts/${id}/episodes?page=${page}&per_page=${perPage}`
      );
      return data;
    },
    enabled: !!id,
  });

export const useGetTrendingPodcast = (
  page: number = 3,
  perPage: number = 15
) => {
  return useQuery<PodcastResponse>({
    queryKey: ["trendingPodcasts", page, perPage],
    queryFn: async () => {
      const { data } = await axios.get(
        `/popular-and-trending-podcasts?page==${page}&per_page=${perPage}`
      );
      return data;
    },
  });
};

export const useGetPodcastById = (id: number | string) =>
  useQuery<PodCastByIdResponse>({
    queryKey: ["podcast", id],
    queryFn: async () => {
      const { data } = await axios.get(`/podcasts/${id}`);
      return data;
    },
    enabled: !!id,
  });

export const useGetSearchPodcasts = (query: string) =>
  useQuery({
    queryKey: ["searchPodcasts", query],
    queryFn: async () => {
      const { data } = await axios.get(
        `/podcast-search?q=${encodeURIComponent(query)}&page=1&per_page=15`
      );
      return data;
    },
    enabled: !!query,
  });

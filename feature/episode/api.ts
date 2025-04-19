"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";

export const useGetLatestEpisodes = () =>
  useQuery({
    queryKey: ["latestEpisodes"],
    queryFn: async () => {
      const { data } = await axios.get("/episodes/latest?page=1&per_page=15");
      return data;
    },
  });

export const useGetEpisodeById = (id: number | string) =>
  useQuery({
    queryKey: ["episode", id],
    queryFn: async () => {
      const { data } = await axios.get(`/episodes/${id}`);
      return data;
    },
    enabled: !!id,
  });

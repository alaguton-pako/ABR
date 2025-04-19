"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";

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

export const useGetTopCategories = () =>
  useQuery({
    queryKey: ["topCategories"],
    queryFn: async () => {
      const { data } = await axios.get("/top-categories");
      return data;
    },
  });

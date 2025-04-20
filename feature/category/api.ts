"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { TopCategoriesResponse } from "./types";


export const useGetTopCategories = () =>
  useQuery<TopCategoriesResponse>({
    queryKey: ["topCategories"],
    queryFn: async () => {
      const { data } = await axios.get("/top-categories");
      return data;
    },
  });

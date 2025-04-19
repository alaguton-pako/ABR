"use client";
import { useGetTopPodcasts } from "@/feature/podcast/api";

const TestPodcasts = () => {
  const { data, isLoading, error } = useGetTopPodcasts();
  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  // Access the actual podcasts data and pagination
  const podcasts = data?.data?.data; 

  return (
    <div>
      <h1 className="text-9xl">Top Podcasts</h1>
      <ul>
        {podcasts?.map((podcast) => (
          <li key={podcast.id}>
            <h2>{podcast.title}</h2>
            <img src={podcast.picture_url} alt={podcast.title} />
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPodcasts;

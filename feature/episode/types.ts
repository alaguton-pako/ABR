// types/episode.ts
export interface Publisher {
  id: number;
  first_name: string;
  last_name: string;
  company_name: string;
  profile_image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Podcast {
  id: number;
  user_id: number;
  title: string;
  author: string;
  category_name: string;
  category_type: string;
  picture_url: string;
  cover_picture_url: string | null;
  description: string;
  embeddable_player_settings: any;
  created_at: string;
  updated_at: string;
  publisher: Publisher;
}

export interface Episode {
  id: number;
  podcast_id: number;
  content_url: string;
  title: string;
  season: string | null;
  number: string | null;
  picture_url: string;
  description: string;
  explicit: boolean;
  duration: number;
  created_at: string;
  updated_at: string;
  play_count: number;
  like_count: number;
  average_rating: number | null;
  published_at: string;
  podcast: Podcast;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface EpisodeListResponse {
  message: string;
  data: PaginatedResponse<Episode>;
}

// For episode by ID
export interface EpisodeByIdResponse {
  message: string;
  data: Episode;
}

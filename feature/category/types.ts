export interface PodcastCategory {
    name: string;
    image_url: string;
  }
  
  export interface TopCategoriesResponse {
    message: string;
    data: PodcastCategory[];
  }
  
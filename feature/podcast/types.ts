export interface Publisher {
  id: number
  first_name: string
  last_name: string
  company_name: string
  profile_image_url: string | null
  created_at: string
  updated_at: string
}

export interface Podcast {
  id: number
  user_id: number
  title: string
  author: string
  category_name: string
  category_type: string
  picture_url: string
  cover_picture_url: string | null
  description: string
  embeddable_player_settings: any // Can be defined more precisely if needed
  created_at: string
  updated_at: string
  subscriber_count: number
  publisher: Publisher
}

export interface PaginationLink {
  url: string | null
  label: string
  active: boolean
}

export interface PodcastResponse {
  message: string
  data: {
    current_page: number
    data: Podcast[] // Array of podcasts
    links: PaginationLink[] // Pagination links for previous, next, etc.
    next_page_url: string | null
    prev_page_url: string | null
    total: number
    first_page_url: string
    last_page_url: string
    per_page: number
    to: number
  }
}

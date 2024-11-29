export interface BlogPost {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  content?: string
  author: {
    name: string
    picture: string
  }
  tags: string[],
  readingTime: string,
}

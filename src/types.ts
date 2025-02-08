export type Post = {
  id: string
  title: string
  content: string
  authorId: string
  date: string
  impressions: Impressions
}

export type User = {
  id: string
  fullName: string
}
export type ImpressionsEmojis = {
  thumbUp: string
  wow: string
  heart: string
  rocket: string
  coffee: string
}

export type Impressions = {
  thumbUp: number
  wow: number
  heart: number
  rocket: number
  coffee: number
}

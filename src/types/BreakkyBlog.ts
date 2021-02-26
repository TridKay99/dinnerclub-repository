import {BlogType} from "./BlogType"

export type BreakkyBlog = {
  title: String
  cafe: String
  location: String
  displayImage: File
  blogText: String
  blogVariety: BlogType
  date: Date
}
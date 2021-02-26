import {BlogType} from "./BlogType"
import {FileType} from "./FileType"

export type DinnerDrama = {
  title: String
  restaurant: String
  location: String
  displayImage: FileType
  blogText: String
  blogVariety: BlogType.DINNER
  date: Date
}
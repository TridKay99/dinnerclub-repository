import * as mongoose from 'mongoose';
import {BreakkyBlog} from "../types/BreakkyBlog"

const dinnerDramaSchema = new mongoose.Schema({
  title: String,
  restaurant: String,
  location: String,
  displayImage: String,
  body: String,
  blogType: String
})

const dinnerDramaModel = mongoose.model<BreakkyBlog & mongoose.Document>('DinnerDrama', dinnerDramaSchema)

export default dinnerDramaModel
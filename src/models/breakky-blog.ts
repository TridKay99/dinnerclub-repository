import * as mongoose from 'mongoose';
import {BreakkyBlog} from "../types/BreakkyBlog"

const breakkyBlogSchema = new mongoose.Schema({
  title: String,
  cafe: String,
  location: String,
  displayImage: {},
  blogText: String,
  blogVariety: String,
  date: Date
})

const breakkyBlogModel = mongoose.model<BreakkyBlog & mongoose.Document>('BreakkyBlog', breakkyBlogSchema)

export default breakkyBlogModel
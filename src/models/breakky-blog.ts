import * as mongoose from 'mongoose';
import {BreakkyBlog} from "../types/BreakkyBlog"

const breakkyBlogSchema = new mongoose.Schema({
  title: String,
  cafe: String,
  location: String,
  displayImage: String,
  body: String,
  blogType: String
})

const breakkyBlogModel = mongoose.model<BreakkyBlog & mongoose.Document>('BreakkyBlog', breakkyBlogSchema)

export default breakkyBlogModel
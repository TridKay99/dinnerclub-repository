import * as mongoose from 'mongoose';
import {DinnerDrama} from "../types/DinnerDrama"

const dinnerDramaSchema = new mongoose.Schema({
  title: String,
  restaurant: String,
  location: String,
  displayImage: {
    name: String,
    base64: String
  },
  blogText: String,
  blogVariety: String,
  date: Date
})

const dinnerDramaModel = mongoose.model<DinnerDrama & mongoose.Document>('DinnerDrama', dinnerDramaSchema)

export default dinnerDramaModel
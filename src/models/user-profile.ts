import * as mongoose from 'mongoose';
import {UserProfile} from "../types/UserProfile"

const userProfileSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const userProfileModel = mongoose.model<UserProfile & mongoose.Document>('UserProfile', userProfileSchema);

export default userProfileModel;
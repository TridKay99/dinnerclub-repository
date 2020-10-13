import * as express from 'express';
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose';
import userProfileModel from './models/user-profile';
import 'dotenv/config'
import {UserProfile} from "./types/UserProfile"
import {BreakkyBlogService} from "./services/breakky-blog-service"
import {DinnerDramaService} from "./services/dinner-drama-service"

const router = express.Router();
const app = express();

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PATH,
} = process.env;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/DinnerClub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use('/', router);
app.use('/api', router);

app.get('/create-user-profile', (request, response) => {
  createUserProfile(request, response)
});

app.get('/all-user-profiles', (request: express.Request, response: express.Response) => {
  getAllUserProfiles(request, response)
});

const createUserProfile = (request: express.Request, response: express.Response) => {
  const userProfile: UserProfile = request.body;
  const createdUserProfile = new userProfileModel(userProfile);
  createdUserProfile.save()
    .then(savedPost => {
      response.send(savedPost);
    })
}

const getAllUserProfiles = (request: express.Request, response: express.Response) => {
  userProfileModel.find()
    .then(posts => {
      response.send(posts);
    })
}


app.post('/create-breakky-blog', (request: express.Request, response: express.Response) => {
  BreakkyBlogService.create(request, response)
})

app.get('/get-all-breakky-blog', (request: express.Request, response: express.Response) => {
  BreakkyBlogService.getAll(request, response)
})

app.get('/get-breakky-blog', (request: express.Request, response: express.Response) => {
  BreakkyBlogService.findOne(request, response)
})

app.delete('/delete-breakky-blog/', (request: express.Request, response: express.Response) => {
  BreakkyBlogService.delete(request, response)
})

app.get('/create-dinner-drama', (request: express.Request, response: express.Response) => {
  DinnerDramaService.createDinnerDrama(request, response)
})

router.get('userProfile/:id', getUserProfileById);

function getUserProfileById(request: express.Request, response: express.Response) {
  const id = request.params.id;
  userProfileModel.findById(id)
    .then(post => {
      response.send(post);
    })
}

app.listen(5000);
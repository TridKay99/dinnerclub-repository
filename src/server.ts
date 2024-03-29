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
  PORT
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

//BREAKKY BLOG
app.post('/create-breakky-blog', (request: express.Request, response: express.Response) => {
  BreakkyBlogService.create(request, response)
})

app.put('/update-breakky-blog', (request: express.Request, response: express.Response) => {
  BreakkyBlogService.update(request, response)
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

//DINNER DRAMA
app.post('/create-dinner-drama', (request: express.Request, response: express.Response) => {
  DinnerDramaService.create(request, response)
})

app.put('/update-dinner-drama', (request: express.Request, response: express.Response) => {
  DinnerDramaService.update(request, response)
})

app.get('/get-all-dinner-drama', (request: express.Request, response: express.Response) => {
  DinnerDramaService.getAll(request, response)
})

app.get('/get-dinner-drama', (request: express.Request, response: express.Response) => {
  DinnerDramaService.findOne(request, response)
})

app.delete('/delete-dinner-drama/', (request: express.Request, response: express.Response) => {
  DinnerDramaService.delete(request, response)
})

//USER PROFILE
router.get('userProfile/:id', getUserProfileById);

function getUserProfileById(request: express.Request, response: express.Response) {
  const id = request.params.id;
  userProfileModel.findById(id)
    .then(post => {
      response.send(post);
    })
}

app.listen(process.env.PORT || 5000, () => console.log(`app is listening on port ${process.env.PORT}`));
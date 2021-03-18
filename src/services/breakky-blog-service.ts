import * as express from "express"
import {BreakkyBlog} from "../types/BreakkyBlog"
import breakkyBlogModel from "../models/breakky-blog"
import userProfileModel from "../models/user-profile"
import dinnerDramaModel from "../models/dinner-drama"

export const BreakkyBlogService = {
  create: (request: express.Request, response: express.Response) => {
    const breakkyBlog= request.body;
    const createBreakkyBlog = new breakkyBlogModel(breakkyBlog.data);
    createBreakkyBlog.save()
      .then(savedPost => {
        console.log('savedPost', savedPost)
        response.send(savedPost)
      })
      .catch((response) => console.log(response))
  },

  getAll: (request: express.Request, response: express.Response) => {
    breakkyBlogModel.find()
      .then(posts => {
        response.send(posts);
      })
  },

  findOne: (request: express.Request, response: express.Response) => {
    breakkyBlogModel.findOne()
      .then(posts => {
        response.send(posts);
      })
  },

  update: (request: express.Request, response: express.Response) => {
    try {
      breakkyBlogModel.updateOne({_id: request.body._id}, request.body).then(() => {
        response.status(201).json({message: 'Done Tridda. Here are BOOBS'})
      })

    } catch (e) {
      console.log('ERROR TRIDDA!!', e)
    }
  },

  delete: (request: express.Request, response: express.Response) => {
    const id = request.headers._id;
    breakkyBlogModel.findByIdAndDelete(id)
      .then(successfulPost => {
        console.log(successfulPost)
        response.sendStatus(200);
      })
  }
}
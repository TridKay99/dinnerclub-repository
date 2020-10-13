import * as express from "express"
import {BreakkyBlog} from "../types/BreakkyBlog"
import breakkyBlogModel from "../models/breakky-blog"
import userProfileModel from "../models/user-profile"

export const BreakkyBlogService = {
  create: (request: express.Request, response: express.Response) => {
    const breakkyBlog: BreakkyBlog = request.body;
    console.log('breakkyBlog', breakkyBlog)
    const createBreakkyBlog = new breakkyBlogModel(breakkyBlog);
    console.log('createBreakkyBlog', createBreakkyBlog)
    createBreakkyBlog.save()
      .then(savedPost => {
        response.send(savedPost);
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

  delete: (request: express.Request, response: express.Response) => {
    const id = request.headers._id;
    breakkyBlogModel.findByIdAndDelete(id)
      .then(successfulPost => {
        console.log(successfulPost)
        response.sendStatus(200);
      })
  }
}
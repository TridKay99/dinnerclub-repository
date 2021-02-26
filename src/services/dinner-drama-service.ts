import * as express from "express"
import dinnerDramaModel from "../models/dinner-drama"

export const DinnerDramaService = {
  create: (request: express.Request, response: express.Response) => {
    const dinnerDrama = request.body;
    const createDinnerDrama = new dinnerDramaModel(dinnerDrama.data);
    createDinnerDrama.save()
      .then(savedPost => {
        response.send(savedPost);
      })
      .catch((response) => {
        console.log('BAD response', response)
      })
  },

  getAll: (request: express.Request, response: express.Response) => {
    dinnerDramaModel.find()
      .then(posts => {
        response.send(posts);
      })
  },

  findOne: (request: express.Request, response: express.Response) => {
    dinnerDramaModel.findOne()
      .then(posts => {
        response.send(posts);
      })
  },

  delete: (request: express.Request, response: express.Response) => {
    const id = request.headers._id;
    dinnerDramaModel.findByIdAndDelete(id)
      .then(successfulPost => {
        console.log(successfulPost)
        response.sendStatus(200);
      })
  }
}
import * as express from "express"
import dinnerDramaModel from "../models/dinner-drama"
import {DinnerDrama} from "../types/DinnerDrama"

export const DinnerDramaService = {
  createDinnerDrama: (request: express.Request, response: express.Response) => {
    const dinnerDrama: DinnerDrama = request.body;
    const createDinnerDrama = new dinnerDramaModel(dinnerDrama);
    createDinnerDrama.save()
      .then(savedPost => {
        response.send(savedPost);
      })
  }
}
import express from 'express'
import * as linkHandlers from '../../handlers/links.handlers'

const user = express.Router()

user
  .route('/')
//   .get(linkHandlers.getAll)
  .post(linkHandlers.create)
//   .put(validateJWT, linkHandlers.updateOne)

export default user

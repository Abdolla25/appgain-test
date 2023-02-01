import express from 'express'
import * as linkHandlers from '../../handlers/links.handlers'

const user = express.Router()

user
  .route('/')
  .get(linkHandlers.getAll)
  .post(linkHandlers.create)

export default user

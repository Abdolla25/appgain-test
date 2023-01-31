import express from 'express'
import { validateJWT } from '../../handlers/auth.handlers'
import * as userHandlers from '../../handlers/users.handlers'

const user = express.Router()

user
  .route('/')
  .get(validateJWT, userHandlers.getAll)
  .post(userHandlers.create)
  .put(validateJWT, userHandlers.updateOne)

user.route('/:id').get(validateJWT, userHandlers.getOne).delete(validateJWT, userHandlers.deleteOne)

user.route('/auth').post(userHandlers.authenticateOne)

export default user

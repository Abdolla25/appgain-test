import express from 'express'
import { validateJWT } from '../../handlers/auth.handlers'
import * as orderHandlers from '../../handlers/orders.handlers'

const user = express.Router()

user
  .route('/')
  .get(orderHandlers.getAll)
  .post(validateJWT, orderHandlers.create)
  .put(validateJWT, orderHandlers.updateOne)

user.route('/:id').get(orderHandlers.getOne).delete(validateJWT, orderHandlers.deleteOne)

user.route('/u/:id').get(validateJWT, orderHandlers.getOneUser)
user.route('/uc/:id').get(validateJWT, orderHandlers.getOneUserComplete)

export default user

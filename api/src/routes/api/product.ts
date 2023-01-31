import express from 'express'
import { validateJWT } from '../../handlers/auth.handlers'
import * as productHandlers from '../../handlers/products.handlers'

const user = express.Router()

user
  .route('/')
  .get(productHandlers.getAll)
  .post(validateJWT, productHandlers.create)
  .put(validateJWT, productHandlers.updateOne)

user.route('/:id').get(productHandlers.getOne).delete(validateJWT, productHandlers.deleteOne)

export default user

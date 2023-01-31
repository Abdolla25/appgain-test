import express from 'express'
import order from './api/order'
import product from './api/product'
import user from './api/user'
const api = express.Router()

api.get('/', (_req: express.Request, res: express.Response) => {
  res.json({ message: 'This is index api route' })
})

api.use('/user', user)
api.use('/product', product)
api.use('/order', order)

export default api

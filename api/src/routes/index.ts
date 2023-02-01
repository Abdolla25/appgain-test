import express, { Request, Response } from 'express'
import { db } from '../database/firebase'
import { v4 as uuidv4 } from 'uuid';
import link from './api/link'

const api = express.Router()

api.get('/', (_req: express.Request, res: express.Response) => {
  res.send({ message: 'index api route' })
})

api.use('/shortlinks', link)

export default api

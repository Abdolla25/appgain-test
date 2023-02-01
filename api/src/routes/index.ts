import express, { Request, Response } from 'express'
import { db } from '../database/firebase'
import { v4 as uuidv4 } from 'uuid';
import link from './api/link'

const api = express.Router()

api.get('/', (_req: express.Request, res: express.Response) => {
  res.json({ message: 'This is index api route' })
})

api.use('/shortlinks', link)
// api.post('/shortlinks', async (req: Request, res: Response) => {
//   const {slug, link} = req.body
 
//   const linkRef = db.collection('links').doc('shortLink-1')
//   const resp = await linkRef.set({
//     [slug]: link
//   }, { merge: true })
//   res.status(200).send('Done')
// })

export default api

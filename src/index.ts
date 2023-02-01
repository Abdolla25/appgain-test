import express, { Application, Request, Response } from 'express'
import { PORT } from './config'
import api from './routes'

const port = PORT || 3000

const app: Application = express()


// JSON parsing middleware
app.use(express.json())


// Index Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World 🌍' })
})

// API Routes middleware
app.use('/api', api)

app.listen(port, () => {
  console.log(`Server is starting at port:${port}`)
})

export default app

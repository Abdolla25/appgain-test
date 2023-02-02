import express, { Application, Request, Response } from 'express'
import { PORT } from './config'
import api from './routes'

const port = PORT || 3000

const app: Application = express()


// JSON parsing middleware
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://morning-forest-34474.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

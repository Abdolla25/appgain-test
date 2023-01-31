import { Pool } from 'pg'
import {
  POSTGRES_DB_DEV,
  POSTGRES_DB_TEST,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER
} from '../config'

const pool = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB_DEV,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT)
})

pool.on('error', (error: Error) => {
  console.error(error.message)
})

export default pool

// import db from './database'

// db.connect().then(client => {
//     return client.query('SELECT NOW()').then(res => {
//       client.release()
//       console.log(res.rows)
//     }).catch(err => {
//       client.release()
//       console.log(err.stack)
//     })
//   })

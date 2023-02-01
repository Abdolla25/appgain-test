import * as dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT

export const GOOGLE_CREDS = process.env.GOOGLE_CREDS as string



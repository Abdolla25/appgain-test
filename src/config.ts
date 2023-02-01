import * as dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT

export const apiKey = process.env.apiKey
export const authDomain = process.env.authDomain
export const projectId = process.env.projectId
export const storageBucket = process.env.storageBucket
export const messagingSenderId = process.env.messagingSenderId
export const appId = process.env.appId

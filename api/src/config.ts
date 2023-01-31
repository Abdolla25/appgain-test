import * as dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT
export const ENV = process.env.ENV

export const POSTGRES_HOST = process.env.POSTGRES_HOST
export const POSTGRES_PORT = process.env.POSTGRES_PORT
export const POSTGRES_DB_DEV = process.env.POSTGRES_DB_DEV
export const POSTGRES_DB_TEST = process.env.POSTGRES_DB_TEST
export const POSTGRES_USER = process.env.POSTGRES_USER
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD

export const BCRYPT_PASSWORD = process.env.BCRYPT_PASSWORD
export const SALT_ROUNDS = process.env.SALT_ROUNDS

export const JWT_TOKEN = process.env.JWT_TOKEN_SECRET

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_TOKEN } from '../config'

export const validateJWT = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const getAuthHeader = req.get('Authorization') as unknown as string
    const verify = jwt.verify(getAuthHeader.split(' ')[1], JWT_TOKEN as unknown as string)
    if (verify) {
      next()
    } else {
      throw new Error('Error on validate request!')
    }
  } catch (error) {
    throw new Error('Error on validate request!')
  }
}

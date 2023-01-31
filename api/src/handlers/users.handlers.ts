import { Request, Response } from 'express'
import { UserModel } from '../models/user.model'
import jwt from 'jsonwebtoken'
import { JWT_TOKEN } from '../config'

const userModel = new UserModel()

export const create = async (req: Request, res: Response) => {
  try {
    const user = await userModel.create(req.body)
    res.json({
      message: 'Create Done!',
      data: { user }
    })
  } catch (error) {
    throw new Error('Error on create user!')
  }
}
export const getAll = async (req: Request, res: Response) => {
  try {
    const user = await userModel.getAll()
    res.json({
      message: 'GET ALL Done!',
      data: { ...user }
    })
  } catch (error) {
    throw new Error('Error on get all users!')
  }
}
export const getOne = async (req: Request, res: Response) => {
  try {
    const user = await userModel.getOne(req.params.id as unknown as number)
    res.json({
      message: 'GET ONE Done!',
      data: { ...user }
    })
  } catch (error) {
    throw new Error('Error on get one users!')
  }
}
export const updateOne = async (req: Request, res: Response) => {
  try {
    const user = await userModel.updateOne(req.body)
    res.json({
      message: 'Update Done!',
      data: { ...user }
    })
  } catch (error) {
    throw new Error('Error on update one user!')
  }
}
export const deleteOne = async (req: Request, res: Response) => {
  try {
    const user = await userModel.deleteOne(req.params.id as unknown as number)
    res.json({
      message: 'Delete Done!',
      data: { ...user }
    })
  } catch (error) {
    throw new Error('Error on delete one users!')
  }
}
export const authenticateOne = async (req: Request, res: Response) => {
  try {
    const user = await userModel.authenticateOne(req.body.userName, req.body.password)
    const JWT = jwt.sign({ user }, JWT_TOKEN as unknown as string)
    if (!user) {
      return res.json({
        message: 'Error on authenticate user!'
      })
    }
    return res.json({
      message: 'Authenticate Done!',
      data: { ...user, JWT }
    })
  } catch (error) {
    throw new Error('Error on authenticate user!')
  }
}

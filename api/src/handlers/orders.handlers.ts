import { Request, Response } from 'express'
import { OrderModel } from '../models/order.model'

const orderModel = new OrderModel()

export const create = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.create(req.body)
    res.json({
      message: 'Done!',
      data: { order }
    })
  } catch (error) {
    throw new Error('Error on create order!')
  }
}
export const getAll = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.getAll()
    res.json({
      message: 'Done!',
      data: { ...order }
    })
  } catch (error) {
    throw new Error('Error on get all orders!')
  }
}
export const getOne = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.getOne(req.params.id as unknown as number)
    res.json({
      message: 'Done!',
      data: { ...order }
    })
  } catch (error) {
    throw new Error('Error on get one orders!')
  }
}
export const updateOne = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.updateOne(req.body)
    res.json({
      message: 'Done!',
      data: { ...order }
    })
  } catch (error) {
    throw new Error('Error on update one order!')
  }
}
export const deleteOne = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.deleteOne(req.params.id as unknown as number)
    res.json({
      message: 'Done!',
      data: { ...order }
    })
  } catch (error) {
    throw new Error('Error on delete one orders!')
  }
}
export const getOneUser = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.getOneUser(req.params.id as unknown as number)
    res.json({
      message: 'Done!',
      data: { ...order }
    })
  } catch (error) {
    throw new Error('Error on get one orders!')
  }
}
export const getOneUserComplete = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.getOneUserComplete(req.params.id as unknown as number)
    res.json({
      message: 'Done!',
      data: { ...order }
    })
  } catch (error) {
    throw new Error('Error on get one orders!')
  }
}

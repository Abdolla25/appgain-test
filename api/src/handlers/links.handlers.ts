import { Request, Response } from 'express'
import { LinkModel } from '../models/links.model'

const linkModel = new LinkModel()

export const create = async (req: Request, res: Response) => {
  try {
    const link = await linkModel.create(req.body)
    res.status(201).json({
      status: "successful",
      slug: link,
      message: "created successfully"
    })
  } catch (error) {
    throw new Error('Error on create link!')
  }
}
// export const getAll = async (req: Request, res: Response) => {
//   try {
//     const order = await orderModel.getAll()
//     res.json({
//       message: 'Done!',
//       data: { ...order }
//     })
//   } catch (error) {
//     throw new Error('Error on get all orders!')
//   }
// }
// export const getOne = async (req: Request, res: Response) => {
//   try {
//     const order = await orderModel.getOne(req.params.id as unknown as number)
//     res.json({
//       message: 'Done!',
//       data: { ...order }
//     })
//   } catch (error) {
//     throw new Error('Error on get one orders!')
//   }
// }
// export const updateOne = async (req: Request, res: Response) => {
//   try {
//     const order = await orderModel.updateOne(req.body)
//     res.json({
//       message: 'Done!',
//       data: { ...order }
//     })
//   } catch (error) {
//     throw new Error('Error on update one order!')
//   }
// }

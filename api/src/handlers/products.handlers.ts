import { Request, Response } from 'express'
import { ProductModel } from '../models/product.model'

const productModel = new ProductModel()

export const create = async (req: Request, res: Response) => {
  try {
    const product = await productModel.create(req.body)
    res.json({
      message: 'Done!',
      data: { product }
    })
  } catch (error) {
    throw new Error('Error on create product!')
  }
}
export const getAll = async (req: Request, res: Response) => {
  try {
    const product = await productModel.getAll()
    res.json({
      message: 'Done!',
      data: { ...product }
    })
  } catch (error) {
    throw new Error('Error on get all products!')
  }
}
export const getOne = async (req: Request, res: Response) => {
  try {
    const product = await productModel.getOne(req.params.id as unknown as number)
    res.json({
      message: 'Done!',
      data: { ...product }
    })
  } catch (error) {
    throw new Error('Error on get one products!')
  }
}
export const updateOne = async (req: Request, res: Response) => {
  try {
    const product = await productModel.updateOne(req.body)
    res.json({
      message: 'Done!',
      data: { ...product }
    })
  } catch (error) {
    throw new Error('Error on update one product!')
  }
}
export const deleteOne = async (req: Request, res: Response) => {
  try {
    const product = await productModel.deleteOne(req.params.id as unknown as number)
    res.json({
      message: 'Done!',
      data: { ...product }
    })
  } catch (error) {
    throw new Error('Error on delete one products!')
  }
}

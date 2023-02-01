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
export const getAll = async (req: Request, res: Response) => {
  try {
    const shortlinks = await linkModel.getAll()
    res.json({shortlinks})
  } catch (error) {
    throw new Error('Error on get all links!')
  }
}

import { db } from "../database/firebase"
import { v4 as uuidv4 } from 'uuid';
import { WriteResult } from "firebase-admin/firestore";

export type Link = {
  slug?: string
  ios: object
  android: object
  web: string
}

export class LinkModel {
    async create(link: Link) {
        try {
            const linkRef = db.collection('links').doc(`${link.slug || uuidv4()}`)
            const result = await linkRef.set({
                "slug": link.slug,
                "ios": link.ios,
                "android": link.android,
                "web": link.web
            }, { merge: true })
            return link.slug
        } catch (error) {
            throw new Error('Error on create link!')
        }
  }
//   async getAll(): Promise<Order[]> {
//     try {
//       const conn = await db.connect()
//       const sql = `SELECT * FROM orders`
//       const result = await conn.query(sql)
//       conn.release()
//       return result.rows
//     } catch (error) {
//       throw new Error('Error on get all orders!')
//     }
//   }
//   async getOne(id: number): Promise<Order> {
//     try {
//       const conn = await db.connect()
//       const sql = `SELECT * FROM orders WHERE id=$1`
//       const result = await conn.query(sql, [id])
//       conn.release()
//       return result.rows[0]
//     } catch (error) {
//       throw new Error('Error on get one order!')
//     }
//   }
//   async updateOne(order: Order): Promise<Order> {
//     try {
//       const conn = await db.connect()
//       const sql = `UPDATE orders SET id=$1, OrderStatus=$2, uid=$3 WHERE id=$1 returning *;`
//       const result = await conn.query(sql, [order.id, order.OrderStatus, order.uid])
//       conn.release()
//       return result.rows[0]
//     } catch (error) {
//       throw new Error('Error on update one order!')
//     }
//   }
}

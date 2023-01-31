import db from '../database'

export type Order = {
  id?: number
  OrderStatus: number
  uid: number
}

export class OrderModel {
  async create(order: Order): Promise<Order> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO orders (OrderStatus, uid) VALUES ($1, $2) returning *;`
      const result = await conn.query(sql, [order.OrderStatus, order.uid])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on create order!')
    }
  }
  async getAll(): Promise<Order[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM orders`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error('Error on get all orders!')
    }
  }
  async getOne(id: number): Promise<Order> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM orders WHERE id=$1`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on get one order!')
    }
  }
  async updateOne(order: Order): Promise<Order> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE orders SET id=$1, OrderStatus=$2, uid=$3 WHERE id=$1 returning *;`
      const result = await conn.query(sql, [order.id, order.OrderStatus, order.uid])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on update one order!')
    }
  }
  async deleteOne(id: number): Promise<Order> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM orders WHERE id=$1 returning *;`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on delete one order!')
    }
  }
  async getOneUser(id: number): Promise<Order[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM orders WHERE uid=$1 AND OrderStatus=1`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error('Error on get one order!')
    }
  }
  async getOneUserComplete(id: number): Promise<Order[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM orders WHERE uid=$1 AND OrderStatus=2`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error('Error on get one order!')
    }
  }
}

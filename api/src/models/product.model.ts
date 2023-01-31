import db from '../database'

export type Product = {
  id?: number
  name: string
  Price: string
}

export class ProductModel {
  async create(product: Product): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO products (name, Price) VALUES ($1, $2) returning *;`
      const result = await conn.query(sql, [product.name, product.Price])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on create product!')
    }
  }
  async getAll(): Promise<Product[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM products`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error('Error on get all products!')
    }
  }
  async getOne(id: number): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM products WHERE id=$1`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on get one product!')
    }
  }
  async updateOne(product: Product): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE products SET id=$1, name=$2, Price=$3 WHERE id=$1 returning *;`
      const result = await conn.query(sql, [product.id, product.name, product.Price])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on update one product!')
    }
  }
  async deleteOne(id: number): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM products WHERE id=$1 returning *;`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on delete one product!')
    }
  }
}

import { BCRYPT_PASSWORD, SALT_ROUNDS } from '../config'
import db from '../database'
import bcrypt from 'bcrypt'

const hash = (password: string) => {
  const salt = parseInt(SALT_ROUNDS as unknown as string)
  return bcrypt.hashSync(`${password}${BCRYPT_PASSWORD}`, salt)
}

export type User = {
  id?: number
  userName: string
  firstName: string
  lastName: string
  password: string
}

export class UserModel {
  async create(user: User): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO users (userName, firstName, lastName, password) VALUES ($1, $2, $3, $4) returning *;`
      const result = await conn.query(sql, [
        user.userName,
        user.firstName,
        user.lastName,
        hash(user.password)
      ])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on create user!')
    }
  }
  async getAll(): Promise<User[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM users`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error('Error on get all users!')
    }
  }
  async getOne(id: number): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * FROM users WHERE id=$1`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on get one user!')
    }
  }
  async updateOne(user: User): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE users SET id=$1, userName=$2, firstname=$3, lastname=$4, password=$5 WHERE id=$1 returning *;`
      const result = await conn.query(sql, [
        user.id,
        user.userName,
        user.firstName,
        user.lastName,
        hash(user.password)
      ])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on update one user!')
    }
  }
  async deleteOne(id: number): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM users WHERE id=$1 returning *;`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error('Error on delete one user!')
    }
  }
  async authenticateOne(userName: string, password: string): Promise<User | null> {
    try {
      const conn = await db.connect()
      const sql = `SELECT password FROM users WHERE userName=$1`
      const result = await conn.query(sql, [userName])
      if (result.rows.length) {
        const { password: hash } = result.rows[0]
        const passwordCheck = bcrypt.compareSync(`${password}${BCRYPT_PASSWORD}`, hash)
        if (passwordCheck) {
          const user = await conn.query(`SELECT * FROM users WHERE userName=($1)`, [userName])
          return user.rows[0]
        }
      }
      conn.release()
      return null
    } catch (error) {
      throw new Error('Error on authenticate one user!')
    }
  }
}

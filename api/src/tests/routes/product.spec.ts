import supertest from 'supertest'
import app from '../../index'
import db from '../../database'
import { JWT } from './user.spec'

const request = supertest(app)

describe('Test product endpoint', () => {
  afterAll(async () => {
    const conn = await db.connect()
    const sql = `DELETE FROM products; \nALTER SEQUENCE products_id_seq RESTART WITH 1;`
    await conn.query(sql)
    conn.release()
  })

  it('test create endpoint', async () => {
    const response = await request
      .post('/api/product')
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
      .send({
        name: 'testProductRandom',
        Price: 4000 as unknown as string
      })
    expect(response.status).toBe(200)
  })

  it('test get all endpoint', async () => {
    const response = await request.get('/api/product').set('content-type', 'application/json')
    expect(response.status).toBe(200)
  })

  it('test get one endpoint', async () => {
    const response = await request.get(`/api/product/1`).set('content-type', 'application/json')
    expect(response.status).toBe(200)
  })

  it('test update one endpoint', async () => {
    const response = await request
      .put('/api/product')
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
      .send({
        id: 2,
        name: 'testProductRandomUpdated',
        Price: 4000 as unknown as string
      })
    expect(response.status).toBe(200)
  })

  it('test delete one endpoint', async () => {
    const response = await request
      .delete(`/api/product/1`)
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
    expect(response.status).toBe(200)
  })
})

import supertest from 'supertest'
import app from '../../index'
import db from '../../database'
import { JWT } from './user.spec'
import { UserModel, User } from '../../models/user.model'

const userModel = new UserModel()

const request = supertest(app)

describe('Test order endpoint', () => {
  const testData: User = {
    userName: 'testUser',
    firstName: 'First',
    lastName: 'Last',
    password: 'Password'
  }

  beforeAll(async () => {
    const createTest = await userModel.create(testData)
    testData.id = createTest.id
  })

  afterAll(async () => {
    const conn = await db.connect()
    const sql = `DELETE FROM orders; \nALTER SEQUENCE orders_id_seq RESTART WITH 1;`
    await conn.query(sql)
    conn.release()
  })

  it('test create endpoint', async () => {
    const response = await request
      .post('/api/order')
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
      .send({
        OrderStatus: 1,
        uid: testData.id
      })
    expect(response.status).toBe(200)
  })

  it('test get all endpoint', async () => {
    const response = await request.get('/api/order').set('content-type', 'application/json')
    expect(response.status).toBe(200)
  })

  it('test get one endpoint', async () => {
    const response = await request.get(`/api/order/1`).set('content-type', 'application/json')
    expect(response.status).toBe(200)
  })

  it('test update one endpoint', async () => {
    const response = await request
      .put('/api/order')
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
      .send({
        id: 1,
        OrderStatus: 2,
        uid: testData.id
      })
    expect(response.status).toBe(200)
  })

  it('test delete one endpoint', async () => {
    const response = await request
      .delete(`/api/order/1`)
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
    expect(response.status).toBe(200)
  })
})

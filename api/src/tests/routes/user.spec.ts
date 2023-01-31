import supertest from 'supertest'
import app from '../../index'
import db from '../../database'
import { UserModel, User } from '../../models/user.model'

const userModel = new UserModel()
const request = supertest(app)

export let JWT = ''

describe('Test user endpoint', () => {
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
    const sql = `DELETE FROM users; \nALTER SEQUENCE users_id_seq RESTART WITH 1;`
    await conn.query(sql)
    conn.release()
  })

  it('test auth endpoint', async () => {
    const response = await request
      .post('/api/user/auth')
      .set('content-type', 'application/json')
      .send({
        userName: 'testUser',
        password: 'Password'
      })
    expect(response.status).toBe(200)
    JWT = response.body.data.JWT
  })

  it('test create endpoint', async () => {
    const response = await request.post('/api/user').set('content-type', 'application/json').send({
      userName: 'testUserRandom',
      firstName: 'First',
      lastName: 'Last',
      password: 'Password'
    })
    expect(response.status).toBe(200)
  })

  it('test get all endpoint', async () => {
    const response = await request
      .get('/api/user')
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
    expect(response.status).toBe(200)
  })

  it('test get one endpoint', async () => {
    const response = await request
      .get(`/api/user/${testData.id}`)
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
    expect(response.status).toBe(200)
  })

  it('test update one endpoint', async () => {
    const response = await request
      .put('/api/user')
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
      .send({
        id: 2,
        userName: 'testUserRandomUpdated',
        firstName: 'First',
        lastName: 'Last',
        password: 'PasswordUpdated'
      })
    expect(response.status).toBe(200)
  })

  it('test delete one endpoint', async () => {
    const response = await request
      .delete(`/api/user/${testData.id}`)
      .set('content-type', 'application/json')
      .set('authorization', `Bearer ${JWT}`)
    expect(response.status).toBe(200)
  })
})

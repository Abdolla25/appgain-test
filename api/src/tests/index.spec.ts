import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test index endpoint response', () => {
  it('test server host and port respone on its index (200)', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})

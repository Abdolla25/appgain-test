import { UserModel, User } from '../../models/user.model'
import db from '../../database'

const userModel = new UserModel()

describe('Test Authentication from User Model', () => {
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

  it('test auth correct user and password', async () => {
    const testAuth = await userModel.authenticateOne(testData.userName, testData.password)
    expect(testAuth).toBeDefined
  })
})

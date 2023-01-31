import { UserModel, User } from '../../models/user.model'
import db from '../../database'

const userModel = new UserModel()

describe('Test User Model', () => {
  const testData: User = {
    userName: 'testUser',
    firstName: 'First',
    lastName: 'Last',
    password: 'Password'
  }

  afterAll(async () => {
    const conn = await db.connect()
    const sql = `DELETE FROM users; \nALTER SEQUENCE users_id_seq RESTART WITH 1;`
    await conn.query(sql)
    conn.release()
  })

  it('test create new user', async () => {
    const createTest = await userModel.create(testData)
    testData.id = createTest.id
    expect(createTest).toBeDefined
  })
  it('test get all users', async () => {
    const getAllTest = await userModel.getAll()
    expect(getAllTest).toBeDefined
  })
  it('test get specific user', async () => {
    const getOneTest = await userModel.getOne(testData.id as unknown as number)
    expect(getOneTest).toBeDefined
  })
  it('test update specific user', async () => {
    const testUpdatedData: User = {
      id: 1,
      userName: 'testUpdatedUser',
      firstName: 'First',
      lastName: 'Last',
      password: 'UpdatedPassword'
    }
    const updateOneTest = await userModel.updateOne(testUpdatedData)
    expect(updateOneTest).toBeDefined
  })
  it('test delete specific user', async () => {
    const deleteOneTest = await userModel.deleteOne(testData.id as unknown as number)
    expect(deleteOneTest).toBeDefined
  })
})

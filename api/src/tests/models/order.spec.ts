import { OrderModel, Order } from '../../models/order.model'
import db from '../../database'
import { User, UserModel } from '../../models/user.model'

const userModel = new UserModel()
const orderModel = new OrderModel()

describe('Test Order Model', () => {
  const testData: Order = {
    OrderStatus: 1,
    uid: 1
  }
  const testUserData: User = {
    userName: 'testUser',
    firstName: 'First',
    lastName: 'Last',
    password: 'Password'
  }

  beforeAll(async () => {
    const createTest = await userModel.create(testUserData)
    testData.id = createTest.id
  })

  afterAll(async () => {
    const conn = await db.connect()
    const sql = `DELETE FROM orders; \nALTER SEQUENCE orders_id_seq RESTART WITH 1; \nDELETE FROM users; \nALTER SEQUENCE users_id_seq RESTART WITH 1;`
    await conn.query(sql)
    conn.release()
  })

  it('test create new order', async () => {
    const createTest = await orderModel.create(testData)
    testData.id = createTest.id
    expect(createTest).toBeDefined
  })
  it('test get all orders', async () => {
    const getAllTest = await orderModel.getAll()
    expect(getAllTest).toBeDefined
  })
  it('test get specific order', async () => {
    const getOneTest = await orderModel.getOne(testData.id as unknown as number)
    expect(getOneTest).toBeDefined
  })
  it('test update specific order', async () => {
    const testUpdatedData: Order = {
      id: 1,
      OrderStatus: 2,
      uid: 1
    }
    const updateOneTest = await orderModel.updateOne(testUpdatedData)
    expect(updateOneTest).toBeDefined
  })
  it('test delete specific order', async () => {
    const deleteOneTest = await orderModel.deleteOne(testData.id as unknown as number)
    expect(deleteOneTest).toBeDefined
  })
})

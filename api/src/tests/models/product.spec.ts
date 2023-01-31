import { ProductModel, Product } from '../../models/product.model'
import db from '../../database'

const productModel = new ProductModel()

describe('Test Product Model', () => {
  const testData: Product = {
    name: 'testProduct',
    Price: 3000 as unknown as string
  }

  afterAll(async () => {
    const conn = await db.connect()
    const sql = `DELETE FROM products; \nALTER SEQUENCE products_id_seq RESTART WITH 1;`
    await conn.query(sql)
    conn.release()
  })

  it('test create new product', async () => {
    const createTest = await productModel.create(testData)
    testData.id = createTest.id
    expect(createTest).toBeDefined
  })
  it('test get all products', async () => {
    const getAllTest = await productModel.getAll()
    expect(getAllTest).toBeDefined
  })
  it('test get specific product', async () => {
    const getOneTest = await productModel.getOne(testData.id as unknown as number)
    expect(getOneTest).toBeDefined
  })
  it('test update specific product', async () => {
    const testUpdatedData: Product = {
      id: 1,
      name: 'testUpdatedProduct',
      Price: 5000 as unknown as string
    }
    const updateOneTest = await productModel.updateOne(testUpdatedData)
    expect(updateOneTest).toBeDefined
  })
  it('test delete specific product', async () => {
    const deleteOneTest = await productModel.deleteOne(testData.id as unknown as number)
    expect(deleteOneTest).toBeDefined
  })
})

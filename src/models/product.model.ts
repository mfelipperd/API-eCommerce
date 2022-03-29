import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = products;
    return rows as Product[];
  }

  public async createProduct(product: Product):Promise<Product> {
    const { name, amount, orderId } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?,?,?)', 
      [name, amount, orderId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, name, amount, orderId };
  }
}

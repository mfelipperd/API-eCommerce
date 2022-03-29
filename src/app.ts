import express from 'express';
import ProductController from './controller/productController';
import { amountValidation, nameValidation } from './schemas/product.schemas';

const app = express();
const productController = new ProductController();

app.use(express.json());

app.get('/products', productController.getAllProdutcts);
app.post('/products', nameValidation, amountValidation, productController.createProduct);
app.get('/orders');
app.post('/users');

export default app;

import express from 'express';
import ProductController from './controller/productController';
import { amountValidation, nameValidation } from './schemas/product.schemas';

const app = express();
const productController = new ProductController();

app.get('/products', productController.getAllProdutcts);
app.post('/products', nameValidation, amountValidation, );
app.get('/orders');
app.post('/users');

app.use(express.json());

export default app;

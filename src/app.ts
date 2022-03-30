import express from 'express';
import ProductController from './controller/productController';
import { amountValidation, nameValidation } from './schemas/product.schemas';
import { levelValidation, 
  usernameValidation, classeValidation, passwordValidation } from './schemas/user.schemas';
import UserController from './controller/user.controller';

const app = express();
const productController = new ProductController();
const userController = new UserController();

app.use(express.json());

app.get('/products', productController.getAllProdutcts);
app.post('/products', nameValidation, amountValidation, productController.createProduct);
app.get('/orders');
app.post(
  '/users', 
  usernameValidation, 
  classeValidation, 
  levelValidation, 
  passwordValidation,

  userController.createUsers,
);

export default app;

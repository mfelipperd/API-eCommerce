import express from 'express';

const app = express();

app.get('/products');
app.post('/products');
app.get('/orders');
app.post('/users');

app.use(express.json());

export default app;

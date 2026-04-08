require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { users, products, orders } = require('./mocks');

const app = express();
const PORT = process.env.PORT || 3000;
const DELAY_MIN = Number(process.env.DELAY_MIN) || 100;
const DELAY_MAX = Number(process.env.DELAY_MAX) || 400;

app.use(cors());
app.use(express.json());

const delay = (min = DELAY_MIN, max = DELAY_MAX) =>
  new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (max - min + 1)) + min));

let nextId = { users: 5, products: 6, orders: 5 };

// ─── USERS ───────────────────────────────────────────────

app.get('/api/users', async (req, res) => {
  await delay();
  res.json({ data: users, total: users.length });
});

app.get('/api/users/:id', async (req, res) => {
  await delay();
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ data: user });
});

app.post('/api/users', async (req, res) => {
  await delay(200, 600);
  const { name, email, role = 'user' } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'name and email are required' });
  const newUser = { id: nextId.users++, name, email, role, createdAt: new Date().toISOString().split('T')[0] };
  res.status(201).json({ data: newUser, message: 'User created successfully' });
});

app.put('/api/users/:id', async (req, res) => {
  await delay(200, 500);
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  const updated = { ...user, ...req.body, id: user.id };
  res.json({ data: updated, message: 'User updated successfully' });
});

app.delete('/api/users/:id', async (req, res) => {
  await delay(150, 400);
  const exists = users.some(u => u.id === Number(req.params.id));
  if (!exists) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted successfully' });
});

// ─── PRODUCTS ────────────────────────────────────────────

app.get('/api/products', async (req, res) => {
  await delay();
  const { category } = req.query;
  const result = category ? products.filter(p => p.category === category) : products;
  res.json({ data: result, total: result.length });
});

app.get('/api/products/:id', async (req, res) => {
  await delay();
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json({ data: product });
});

app.post('/api/products', async (req, res) => {
  await delay(200, 600);
  const { name, price, category, stock = 0 } = req.body;
  if (!name || price === undefined || !category)
    return res.status(400).json({ message: 'name, price and category are required' });
  const newProduct = { id: nextId.products++, name, price, category, stock, rating: 0 };
  res.status(201).json({ data: newProduct, message: 'Product created successfully' });
});

app.put('/api/products/:id', async (req, res) => {
  await delay(200, 500);
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  const updated = { ...product, ...req.body, id: product.id };
  res.json({ data: updated, message: 'Product updated successfully' });
});

app.delete('/api/products/:id', async (req, res) => {
  await delay(150, 400);
  const exists = products.some(p => p.id === Number(req.params.id));
  if (!exists) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted successfully' });
});

// ─── ORDERS ──────────────────────────────────────────────

app.get('/api/orders', async (req, res) => {
  await delay();
  const { userId, status } = req.query;
  let result = [...orders];
  if (userId) result = result.filter(o => o.userId === Number(userId));
  if (status) result = result.filter(o => o.status === status);
  res.json({ data: result, total: result.length });
});

app.get('/api/orders/:id', async (req, res) => {
  await delay();
  const order = orders.find(o => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json({ data: order });
});

app.post('/api/orders', async (req, res) => {
  await delay(300, 700);
  const { userId, productId, quantity = 1 } = req.body;
  if (!userId || !productId)
    return res.status(400).json({ message: 'userId and productId are required' });
  const product = products.find(p => p.id === Number(productId));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  const newOrder = {
    id: nextId.orders++,
    userId: Number(userId),
    productId: Number(productId),
    quantity: Number(quantity),
    status: 'pending',
    total: +(product.price * quantity).toFixed(2),
    createdAt: new Date().toISOString().split('T')[0],
  };
  res.status(201).json({ data: newOrder, message: 'Order placed successfully' });
});

app.patch('/api/orders/:id/status', async (req, res) => {
  await delay(200, 500);
  const order = orders.find(o => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ message: 'Order not found' });
  const { status } = req.body;
  const allowed = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
  if (!allowed.includes(status))
    return res.status(400).json({ message: `status must be one of: ${allowed.join(', ')}` });
  const updated = { ...order, status };
  res.json({ data: updated, message: 'Order status updated' });
});

// ─── AUTH ─────────────────────────────────────────────────

app.post('/api/auth/login', async (req, res) => {
  await delay(300, 800);
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'email and password are required' });
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({
    data: { token: `mock-jwt-token-${user.id}-${Date.now()}`, user },
    message: 'Login successful',
  });
});

app.post('/api/auth/logout', async (req, res) => {
  await delay(100, 300);
  res.json({ message: 'Logout successful' });
});

// ─── START ────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
  console.log('\nAvailable endpoints:');
  console.log('  GET    /api/users');
  console.log('  GET    /api/users/:id');
  console.log('  POST   /api/users');
  console.log('  PUT    /api/users/:id');
  console.log('  DELETE /api/users/:id');
  console.log('  GET    /api/products[?category=...]');
  console.log('  GET    /api/products/:id');
  console.log('  POST   /api/products');
  console.log('  PUT    /api/products/:id');
  console.log('  DELETE /api/products/:id');
  console.log('  GET    /api/orders[?userId=...&status=...]');
  console.log('  GET    /api/orders/:id');
  console.log('  POST   /api/orders');
  console.log('  PATCH  /api/orders/:id/status');
  console.log('  POST   /api/auth/login');
  console.log('  POST   /api/auth/logout');
});

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin', createdAt: '2024-01-15' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user', createdAt: '2024-02-20' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'user', createdAt: '2024-03-10' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'moderator', createdAt: '2024-04-05' },
];

const products = [
  { id: 1, name: 'Laptop Pro 15', price: 1299.99, category: 'electronics', stock: 42, rating: 4.7 },
  { id: 2, name: 'Wireless Mouse', price: 49.99, category: 'electronics', stock: 150, rating: 4.5 },
  { id: 3, name: 'Standing Desk', price: 599.00, category: 'furniture', stock: 18, rating: 4.8 },
  { id: 4, name: 'Coffee Mug', price: 12.99, category: 'kitchen', stock: 300, rating: 4.2 },
  { id: 5, name: 'Noise Cancelling Headphones', price: 349.99, category: 'electronics', stock: 65, rating: 4.6 },
];

const orders = [
  { id: 1, userId: 2, productId: 1, quantity: 1, status: 'delivered', total: 1299.99, createdAt: '2024-03-01' },
  { id: 2, userId: 3, productId: 2, quantity: 2, status: 'shipped', total: 99.98, createdAt: '2024-03-15' },
  { id: 3, userId: 2, productId: 4, quantity: 3, status: 'pending', total: 38.97, createdAt: '2024-04-01' },
  { id: 4, userId: 4, productId: 3, quantity: 1, status: 'processing', total: 599.00, createdAt: '2024-04-07' },
];

module.exports = { users, products, orders };

const express = require('express');
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  console.log('Received contact form:', req.body);
  res.json({ status: 'success', received: req.body });
});

// Test endpoint (optional)
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
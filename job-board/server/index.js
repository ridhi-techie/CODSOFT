const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const applyRoute = require('./routes/applyRoute');
app.use('/api/apply', applyRoute);


dotenv.config(); // Load .env file

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('🌐 API is running...');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

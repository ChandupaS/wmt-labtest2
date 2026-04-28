const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
const itemRoutes = require('./routes/items');

app.get('/', (req, res) => {
    res.send('Backend Server is Running!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API! Use /api/items to fetch data.' });
});

app.use('/api/items', itemRoutes);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port
${PORT}`));
import express from 'express';
import connectDatabase from './config/db.js';

const app = express();

// Connect to the database
connectDatabase();

app.get('/', (req, res) =>
    res.send('HTTP GET request sent to root API endpoint')
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Express server running on port 3000'));
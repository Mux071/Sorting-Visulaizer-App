const express = require('express');
const cors = require('cors');
const sortingRoutes = require('./routes/sortingRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use sorting routes
app.use('/api/sort', sortingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

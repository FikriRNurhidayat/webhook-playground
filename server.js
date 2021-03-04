const express = require('express');
const multer = require('multer');
const { PORT = 8000 } = process.env;
const app = express();

app.use(express.json())
app.post('/', multer().none(), (req, res) => {
  console.log('Received!:', req.body)
  res.status(204).end();
})

app.listen(PORT, () => console.log('Server is running!'));

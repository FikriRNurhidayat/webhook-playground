const express = require('express');
const multer = require('multer');
const { PORT = 8000 } = process.env;
const app = express();

const onWebhookReceived = (req, res) => {
  console.log('Received!:', req.body);
  res.status(204).end();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/webhook/raw', express.text({ type: '*/*' }), onWebhookReceived) 
app.post('/webhook', multer().none(), onWebhookReceived) 

app.listen(PORT, () => console.log('Server is running!'));

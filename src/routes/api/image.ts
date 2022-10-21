import express from 'express';
const image = express.Router();

image.get('/', (req, res) => {
  res.send('From image route');
});

export default image;

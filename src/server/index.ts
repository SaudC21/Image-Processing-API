import express from 'express';
import routes from '../routes/index';

const app = express();
const PORT = 4000;

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Running on localhost at ${PORT}`);
});

export default app;

import express from 'express';
import connectDb from './lib/connectDb.js';
import traiteurRouter from './routes/traiteur.route.js';
import cors from 'cors';

const app = express();
app.use(cors(process.env.CLIENT_URL));
app.use(express.json());
app.use('/', traiteurRouter);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  connectDb();
});
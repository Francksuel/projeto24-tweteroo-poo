import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import { tweetRouter } from './src/routers/tweet.routes.js';
import { userRouter } from './src/routers/user.routes.js';

const app = express();

app.use(cors());
app.use(json());
app.use(userRouter);
app.use(tweetRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connections from './utils/database';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', async (req: Request, res: Response) => {
  const queryRes = await connections.query("SELECT * FROM users");
  // console.log(queryRes);

  res.send("good");
  
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port:${port}`);
});
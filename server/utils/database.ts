// get the client
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
// Create the connection pool. The pool-specific settings are the defaults
console.log(process.env.DATABASE_URL,process.env.DATABASE_USERNAME);

const pool = mysql.createPool({
  host: process.env.DATABASE_URL,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

const connections = pool.promise();
export default connections;
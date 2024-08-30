require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const express = require('express')
const app = express();


const port = process.env.PORT || 3000


app.get('/', (req:Request, res:any) => {
  res.send('Hello, TypeScript with Express!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
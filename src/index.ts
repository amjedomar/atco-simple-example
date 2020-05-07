import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 7070;

app.get('/', async (req, res) => {
  const content = await fs.promises.readFile(
    path.join(__dirname, 'templates', 'home.html'),
    {encoding: 'utf-8'}
  );

  res.type('text/html; charset=UTF-8');
  res.send(content);
});

app.listen(port, () => {
  console.log(`App is running on ${port} port`);
});

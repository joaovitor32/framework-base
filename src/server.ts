/* /dist/server.js: */
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();
const port = 3000;

app.use(express.static('public'));

app.use('/static', express.static(__dirname + '/build/src/components/'));

const options = {
  root: __dirname + '/build/src/components/',
};

app.get('/', function (_, res: express.Response) {
  res.sendFile('./public/index.html', options);
});

app.listen(port, () => {
  console.log(`Running on port: http://localhost:${port}`);
});

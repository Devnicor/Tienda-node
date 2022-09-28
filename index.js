const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { errorHandler, errLogs, boomErrorHandler } = require('./middlewares/errorHandler')
const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://localhost:9000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hello server!');
})

app.listen(port, () => {
  console.log('Puertoo :' + port)
})

routerApi(app);

app.use(errLogs);
app.use(boomErrorHandler);
app.use(errorHandler);

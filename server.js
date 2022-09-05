const express = require('express');
var app = express();
const port = 3000
var router = require('./routers/apiRouter.js')
var accountRouter = require('./routers/account')
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api', router);
app.use('/api/accounts', accountRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroller');
var sequelize = require('./db');

sequelize.sync();
express.json();
app.use(express.json())
app.use(require('./middleware/headers')); 

/********  exposed routes ***********/
app.use('/test', test)
app.use('/api/user', user)

/********  protected routes ***********/
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);


app.listen(3000, function() {
    console.log('app is on 3000');
});


// app.use('/api/test', function(req, res) {
//     res.send('api/test endpoint');
// })


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTYwMjk2NzYwMiwiZXhwIjoxNjAzMDU0MDAyfQ.FW7oW7aDxQzEJUfRxR8XhN4ORuS6u4vRshhcKzRHqsc
require('dotenv').config();

let express = require('express');
let app = express();
let test = require('./controllers/testcontroller');
let authTest = require('./controllers/logcontroller');
let user = require('./controllers/usercontroller');
let log = require('./controllers/logcontroller');
let sequelize = require('./db');

sequelize.sync();
express.json();
app.use(express.json())
app.use(require('./middleware/headers')); 

/********  exposed routes ***********/
app.use('/test', test)
app.use('/user', user)

/********  protected routes ***********/
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);
app.use('/log', log)


app.listen(3000, function() {
    console.log('app is on 3000');
});


// app.use('/api/test', function(req, res) {
//     res.send('api/test endpoint');
// })


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTYwMjk2NzYwMiwiZXhwIjoxNjAzMDU0MDAyfQ.FW7oW7aDxQzEJUfRxR8XhN4ORuS6u4vRshhcKzRHqsc
var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
// var user = require('./controllers/usercontroller') // Import the usercontroller.js file
var sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use('/test', test);

// app.use('/api/user', user); // We set up a route to the endpoints for the api/user route
// //3 You could also write it this way without the require statement above.
// //app.use('/api/user', require('./controllers/usercontrollers'));
app.listen(3000, function(){
     console.log('Hey dude on 3000!!!')
});
// app.use('/api/test', function(req, res){
//      res.send("This is data from the /api/test endpoint. It's from the server.");
// });











// var express = require('express');
// var app = express();
// var test = require('./controllers/testcontroller')
// // var user = require('./controllers/usercontroller')
// var sequelize = require('./db');

// sequelize.sync();
// app.use(express.json());
// app.use('/test', test);
// // app.use('/api/user', user);


// // sequelize.authenticate()
// //     .then(async () => {
// //         console.log('Cdatabase connected');
// //         return sequelize.sync();
// //     })
// //     .catch( () => {
// //         console.log('crash')
// //     });

// app.listen(8000, function() {
//     console.log('SWEET app is on 8000')
// });

// // app.use('/api/test', function(req,res) {
// //     res.send('this is /api/test')
// // });



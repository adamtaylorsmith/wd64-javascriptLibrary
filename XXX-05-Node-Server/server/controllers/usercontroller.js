
var express = require('express')
var router = express.Router()                          //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
/***************************************
 ** Create User Endpoint: Starter     **
 ***************************************/
                                                       //2
router.post('/createuser', function (req, res){
     var username = "The Dude";
     var pass = "therugtiedtheroomtogether";           //3
     User.create({
          username: username,
          passwordhash: pass
     }).then(
          function message(){
               res.send("I hate the Eagles, man");
          }
     );
})
module.exports = router;




// var express = require('express')
// var router = express.Router()
// var sequelize = require('../db'); 
// var User = sequelize.import('../models/user');

// router.post('/createuser', function(req, res) {
//     // var username = req.body.user.username;
//     // var pass = req.body.user.password;
//     var username = "the dude";
//     var pass = "therug";

//     User.create({
//         username: username,
//         passowrdhash: pass
//     }).then(
//         function message() {
//             res.send("Eagles blow chunks");
//         }
//     //     function createSuccess(user) {
//     //         res.json({
//     //             user: user,
//     //             message: "created"
//     //         });
//     //     },
//     //     function createError(err) {
//     //        res.send(500, err.message);
//     //    }    
//     );
// });
// module.exports = router;

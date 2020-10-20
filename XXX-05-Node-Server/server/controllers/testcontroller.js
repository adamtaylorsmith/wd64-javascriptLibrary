var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

router.get('/', function(req, res) {
    res.send('hey this is test route');
});

/**************** Simple Response */
router.post('/one', function(req, res) {
    res.send('test 1 got a post request')
});
/**************** Persisting Data */
router.post('/two', function(req, res) {
    let testData = "test data for endpoint two";
    TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send('test two went through!')
        })
});
/**************** req.body */
router.post('/three', function(req, res) {
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
    res.send('test 3 went through yay')
    console.log('test 3 went through hooyay')
});
// router.post('/four', function(req, res) {
//     var testData = req.body.testdata.item;
//     TestModel
//         .create({
//             testdata: testData
//         })
//         .then(
//             function message() {
//                 res.send('test 4 went thru thank god');
//             }
//         );
// });
// router.post('/five', function(req, res) {
//     var testData = req.body.testdata.item;
//     TestModel
//         .create({
//             testdata: testData
//         })
//         .then(
//             function message(data) {
//                 res.send(data);
//             }
//         );
// });
// router.post('/six', function(req, res) {
//     var testData = req.body.testdata.item;
//     TestModel
//         .create({
//             testdata: testData
//         })
//         .then(
//             function message(testdata) {
//                 res.json({
//                     testdata: testdata
//                 })
//             }
//         );
// });
// router.post('/seven', function(req, res) {
//     var testData = req.body.testdata.item;
//     TestModel
//         .create({
//             testdata: testData
//         })
//         .then(
//             function createSuccess(testdata) {
//                 res.json({
//                     testdata: testdata
//                 })
//             },
//             function createError(err) {
//                 res.send(500, err.message);
//             }
//         );
// });


module.exports = router;


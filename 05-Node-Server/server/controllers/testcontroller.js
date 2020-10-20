var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

/****** simple message from server **********/
router.get('/helloclient', function(req, res) {
    res.send('message from server to client')
}) 
/*   *********************        */
router.get('/one', function(req, res) {
    TestModel
    .findAll({
        attributes: ['id', 'testdata']
    })
    .then(
        function findAllSuccess(data) {
            console.log("controller data:", data);
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});
/******** Simple Response *************/
router.post('/one', function(req, res) {
    res.send('test one')
})
/******** Persisting Data *************/
router.post('/two', function(req, res) {
    let testData = "Test Data for endpoint two";
    TestModel
    .create({
        testdata: testData
    }).then(dataFromDatabase => {
        res.send('Test Two success')
    })
});
/******** req.body *************/
router.post('/three', function(req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    res.send('test three success')
    console.log("test three success")
});
router.post('/four', function(req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message() {
                res.send('test 4 went thru thank god');
            }
        );
})
router.post('/five', function(req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(data) {
                res.send(data);
            }
        );
});
router.post('/six', function(req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata) {
                res.json({
                    testdata: testdata
                });
            }
        );
});
router.post('/seven', function(req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSuccess(testdata) {
                res.json({
                    testdata: testdata
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

module.exports = router;

// router.get('/', function(req, res) {
//     res.send('TEST Rte');
// });
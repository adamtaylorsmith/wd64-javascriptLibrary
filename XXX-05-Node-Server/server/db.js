const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlog', 'postgres', 'letmeinat1', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.authenticate().then(
    function() {
        console.log('connected to workoutlog postgres db');
    },
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize;
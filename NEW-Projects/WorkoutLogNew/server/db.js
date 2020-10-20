const Sequelize = require('sequelize');
const sequelize = new Sequelize('workoutlog', 'postgres', 'letmeinat1', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.authenticate().then(
    function() {
        console.log('workoutlog postgres DB');
    },
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize;

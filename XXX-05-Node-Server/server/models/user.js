
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {                 // A function with a Sequelize object that calls the define method
                                                      // A first parameter that will create a 'user' table in Postgres
         username: DataTypes.STRING,                  // An object with 'username' and 'passwordhash' that will be the columns in the table.
         passwordhash: DataTypes.STRING
    });
};
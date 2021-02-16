const { Model, DataTypes } = require('sequelize');

class Contact extends Model{

    static init(connection){
        super.init({
            name: DataTypes.STRING,
            phonenumber: DataTypes.STRING,
            address: DataTypes.STRING
        }, {
            sequelize: connection,
        })
    }

}

module.exports = Contact;
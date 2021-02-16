const { Sequelize } = require('sequelize');
const dbconfig = require('../config/database');

const Contact = require('../models/Contact');

const connection = new Sequelize(dbconfig);

Contact.init(connection);

module.exports = connection;

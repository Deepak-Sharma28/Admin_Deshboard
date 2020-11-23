const Router = require('express').Router();

const config = require('./knexfile').development;

const jwt = require('jsonwebtoken');

const verifiaction = require('./Admin_Deshboard/controller/auth');

const knex = require('knex')(config);

const auth = require('./Admin_Deshboard/controller/auth');

require('./Admin_Deshboard/controller/update')(Router, knex, verifiaction);

require('./Admin_Deshboard/controller/Signup')(Router, knex);

require('./Admin_Deshboard/controller/Login')(Router, knex, jwt);

require('./Admin_Deshboard/controller/del')(Router, knex, verifiaction);

require('./Admin_Deshboard/controller/details')(Router, knex, verifiaction);

module.exports = Router;
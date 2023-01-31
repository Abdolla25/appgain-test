"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config_1 = require("../config");
var pool = new pg_1.Pool({
    host: config_1.POSTGRES_HOST,
    database: config_1.POSTGRES_DB_TEST,
    user: config_1.POSTGRES_USER,
    password: config_1.POSTGRES_PASSWORD,
    port: Number(config_1.POSTGRES_PORT)
});
pool.on('error', function (error) {
    console.error(error.message);
});
exports.default = pool;
// import db from './database'
// db.connect().then(client => {
//     return client.query('SELECT NOW()').then(res => {
//       client.release()
//       console.log(res.rows)
//     }).catch(err => {
//       client.release()
//       console.log(err.stack)
//     })
//   })

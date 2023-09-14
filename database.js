import mysql from "mysql2";

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'yourself100',
    database: 'users_db',
    password: 'ali120900',
    multipleStatements: true
});

export default connection;
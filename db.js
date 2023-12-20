const {Sequelize} = require('sequelize');
//
// module.exports = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PWD,
//     {
//         dialect: "postgres",
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT
//     }
// )

module.exports = new Sequelize(`postgres://habrpguser:pgpwd4habr@localhost/habrdb`,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
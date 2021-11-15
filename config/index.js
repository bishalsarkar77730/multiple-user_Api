require("dotenv").config();

module.exports = {
    DB: process.env.DB_CONNECT,
    PORT: process.env.APP_PORT,
    SECRET: process.env.APP_SECRET
};
const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const cookieParser = require('cookie-parser')
const { connect } = require("mongoose");
const { success, error } = require("consola");

// Bring The Port And The Database Connections
const { DB, PORT } = require('./config');

// Initialize The App
const app = exp();

//middlewares
app.use(cors());
app.use(bp.json());
app.use(cookieParser());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

//all routes
app.use('/api/users', require('./routes/users'));

const startApp = async () => {
    try{
        //Connection With DB
        await connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        success({
            message: `Successfully Connected with the Databse \n${DB}`,
            badge: true
        });

        //start listening For the Server on PORT
        app.listen(PORT, () =>
        success({ message: `Server is Running on Port ${PORT}`,
        badge: true 
    }));
    } catch (err) {
        error({
            message: `Error in Starting the Server \n${err}`,
            badge: true
        });
        startApp();
    }
};

startApp();
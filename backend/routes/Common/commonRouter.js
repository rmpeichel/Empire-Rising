var express = require('express');
var router = express.Router();

function commonRouter(connection) {
    
    var loginRouter = require('./login')(connection);
    router.use('/login', loginRouter);

    var registrationRouter = require('./registration')(connection);
    router.use('/registration', registrationRouter);

    var resetPasswordRouter = require('./resetPassword')(connection);
    router.use('/reset', resetPasswordRouter);

    var aboutRouter = require('./about')(connection);
    router.use('/about', aboutRouter);

    return router;
}

module.exports = commonRouter;
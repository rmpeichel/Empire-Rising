var express = require('express');
var router = express.Router();

function playerRouter(connection) {

    var buildRouter = require('./BuildingsPage/buildingsRoutes')(connection);
    router.use('/buildings', buildRouter);

    var researchRouter = require('./ResearchPage/researchRoutes')(connection);
    router.use('/research', researchRouter);

    var shipsRouter = require('./ShipsPage/shipsRoutes')(connection);
    router.use('/ships', shipsRouter);

    var defenseRouter = require('./DefensePage/defenseRoutes')(connection);
    router.use('/defense', defenseRouter);

    var fleetRouter = require('./FleetPage/fleetRoutes')(connection);
    router.use('/fleet', fleetRouter);

    var upgradesRouter = require('./UpgradesPage/upgradesRoutes')(connection);
    router.use('/upgrades', upgradesRouter);

    var statsRouter = require('./StatsPage/statsRoutes')(connection);
    router.use('/stats', statsRouter);
    return router;
}

module.exports = playerRouter;
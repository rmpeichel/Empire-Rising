var express = require('express');
var router = express.Router();

function playerRouter(database) {

    var buildRouter = requrire('./BuildingsPage/buildingsRoutes')(database);
    router.use('/buildings', buildRouter);

    var researchRouter = require('./ResearchPage/researchRoutes')(database);
    router.use('/research', researchRouter);

    var shipsRouter = require('./ShipsPage/shipsRoutes')(database);
    router.use('/ships', shipsRouter);

    var defenseRouter = require('./DefensePage/defenseRoutes')(database);
    router.use('/defense', defenseRouter);

    var fleetRouter = require('./FleetPage/fleetRoutes')(database);
    router.use('/fleet', fleetRouter);

    var upgradesRouter = require('./UpgradesPage/upgradesRoutes')(database);
    router.use('/upgrades', upgradesRouter);

    var statsRouter = require('./StatsPage/statsRoutes')(database);
    router.use('/stats', statsRouter);
    return router;
}

module.exports = playerRouter;
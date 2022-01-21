var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({

    username: {type: String, required: true, minLength: 1, maxLength: 64, unique: true},
    password: {type: String, required: true, minLength: 8, maxLength: 24},
    email: {type: String, required: true, maxLength: 100},
    administrator: {type: Boolean, required: true, default: false},
    planets: { type:
        [
            {
                planet_name: {type: String, maxLength: 32, minLength: 1, default: "Colony"},
                coordinates: {type: String, required: true},
                buildings: {type:
                    [
                        {
                            metal_mine_level: {type: Number, default: 0},
                            crystal_mine_level: {type: Number, default: 0},
                            deuterium_mine_level: {type: Number, default: 0},
                            solar_plant_level: {type: Number, default: 0},
                            solar_satellites: {type: Number, default: 0},
                            metal_storage_level: {type: Number, default: 0},
                            crystal_storage_level: {type: Number, default: 0},
                            deuterium_storage_level: {type: Number, default: 0},
                            robotic_facility_level: {type: Number, default: 0},
                            research_lab_level: {type: Number, default: 0},
                            shipyard_level: {type: Number, default: 0},
                            nanite_factory: {type: Number, default: 0}
                        }
                    ]
                },
                research: {type:
                    [
                        {
                            energy_technology_level: {type: Number, default: 0},
                            laser_technology_level: {type: Number, default: 0},
                            ion_technology_level: {type: Number, default: 0},
                            plasma_technology_level: {type: Number, default: 0},
                            espionage_technology_level: {type: Number, default: 0},
                            combustion_engine_technology_level: {type: Number, default: 0},
                            impulse_engine_technology_level: {type: Number, default: 0},
                            hyperspace_engine_technology_level: {type: Number, default: 0},
                            hyperspace_technology_level: {type: Number, default: 0},
                            space_technology_level: {type: Number, default: 0}
                        }
                    ]
                },
                ships: {type:
                    [
                        {
                            light_fighter_count: {type: Number, default: 0},
                            heavy_fighter_count: {type: Number, default: 0},
                            light_cruiser_count: {type: Number, default: 0},
                            medium_cruiser_count: {type: Number, default: 0},
                            heavy_cruiser_count: {type: Number, default: 0},
                            battleship_count: {type: Number, default: 0},
                            battlecruiser_count: {type: Number, default: 0},
                            destroyer_count: {type: Number, default: 0},
                            bomber_count: {type: Number, default: 0},
                            spy_probe_count: {type: Number, default: 0},
                            colony_ship_count: {type: Number, default: 0}
                        }
                    ]
                },
                defense: {type:
                    [
                        {
                            rocket_launcher_count: {type: Number, default: 0},
                            light_laser_cannon_count: {type: Number, default: 0},
                            medium_laser_cannon_count: {type: Number, default: 0},
                            heavy_laser_cannon_count: {type: Number, default: 0},
                            gauss_cannon_count: {type: Number, default: 0},
                            plasma_cannon_count: {type: Number, default: 0},
                            ion_cannon_count: {type: Number, default: 0}
                        }
                    ]
                }
            }
        ]
    },
    upgrades: {type: 
        [
            {
                laser_upgrade: {type: Number, default: 0},
                ion_upgrade: {type: Number, default: 0},
                plasma_upgrade: {type: Number, default: 0},
                energy_upgrade: {type: Number, default: 0},
                combustion_engine_upgrade: {type: Number, default: 0},
                impulse_engine_upgrade: {type: Number, default: 0},
                hyperspace_engine_upgrade: {type: Number, default: 0},
                metal_production_upgrade: {type: Number, default: 0},
                crystal_production_upgrade: {type: Number, default: 0},
                deuterium_production_upgrade: {type: Number, default: 0},
                expedition_upgrade: {type: Number, default: 0}
            }
        ]
    }

});

module.exports = mongoose.model('Player', playerSchema);
var express = require('express');
var router = express.Router();
var Player = require("../../models/players");


function registerRouter(connection) {

    router.post("/", async (req, res) => {
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;
        let confirmPass = req.body.confirmPass;
     
        

        console.log(username);
        console.log(email);
        console.log(password);

        if(!username || (username.length > 0 && username.length < 65)) {
            return res.status(400).send({error: 'Username needs to be at least 1 character and no more than 64'});
        }
        
        if(!password || (password.length > 7 && password.length < 25)) {
            return res.status(400).send({error: 'Password needs to be at least 8 characters long and at most 25'});
        }

        //var existsUser = await Player.findOne({
            //username: {$regex: new RegExp('^' + username + '$' + 'i')},
        //});
        
        //if(existsUser) {
            //return res.status(400).send({error: `User '${username}' is already taken. Please choose another one`});
        //}
        //try {
           // newPlayer = await User.create();

            //console.log("Player Created");

          //  res.status(200).json(newPlayer);
      //  }
        //catch(error) {
        //    res.status(400).json('Failed to register user');
        //}

        await Player.findOne({
            username: {$regex: new RegExp('^' + username + '$' + 'i')},
        }).then(player => {
            if(player) {
                return res.status(400).json({username: "Username already exists! Try another one"});
            } else {
                const newPlayer =  new Player({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.bodyd.email
                });

                newPlayer.save().then(player => res.json(player)).catch(error => console.log(error))
            }
        });
        
    })
    return router;
}

module.exports = registerRouter;
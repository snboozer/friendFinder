// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friends = require("../data/friends")
module.exports= function(app){
    app.post("/api/friends", function(req, res){
        for (var i=0; i<friends.length; i++){
            for (var j=0; j< friends[i].scores.length; j++){
                
            }
        }
    })
}
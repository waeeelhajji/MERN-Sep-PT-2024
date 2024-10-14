const MovieController = require("../controllers/movie.controller")



module.exports = (app) => {

    app.get("/api/movies", MovieController.findAllMovies);
    app.get("/api/movies/:id", MovieController.findOneMovie);
    app.post("/api/movies", MovieController.createMovie);
    app.put("/api/movies/:id", MovieController.updateMovie);
    app.delete("/api/movies/:id", MovieController.FindAndDeleteMovie);
}
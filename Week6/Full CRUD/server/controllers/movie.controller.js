//! the controller does the CRUD for the DB

const Movie = require("../models/movie.model")


//? READ ALL MOVIES
module.exports.findAllMovies = (req, res) => {
    Movie.find() // [] 
        .then(AllMovies => {
            console.log(`>>>>> Movie.find() ==> ${AllMovies}`)
            res.json(AllMovies)
        })
        .catch((err) => {
            res.json(err)
        })
}

//? READ One MOVIE
module.exports.findOneMovie = (req, res) => {
    Movie.findOne({ _id: req.params.id }) // [] 
        .then(OneMovie => {
            console.log(`>>>>> Movie.findOne() ==> ${OneMovie}`)
            res.json(OneMovie)
        })
        .catch((err) => {
            res.json(err)
        })
}


//? CREATE MOVIE

module.exports.createMovie = (req, res) => {
    Movie.create(req.body)
        .then(newlyCreatedMovie => {
            res.json(newlyCreatedMovie);
        })
        .catch((err) => {
            res.json(err);
        });

}


//? UPDATE MOVIE

module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedMovie => {
            res.json(updatedMovie);
        })
        .catch((err) => {
            res.json(err);
        });
}


//? Delete One MOVIE
module.exports.FindAndDeleteMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
}




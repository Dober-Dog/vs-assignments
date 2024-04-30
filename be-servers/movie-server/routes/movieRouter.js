const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.js")



movieRouter.route("/")
    .get(async (req, res, next) => {
        try {
            const movies = await Movie.find({})
            res.status(200).send(movies)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .post(async (req, res, next) => {
        try {
            const newMovie = new Movie(req.body)
            await newMovie.save();
            res.status(201).send(newMovie)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    });

movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The item with id of ${movieId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})


movieRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre){
        res.status(500)
        const error = new Error("Genre must be included.")
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filteredMovies)
})

movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.status(201).send("Successfully deleted movie")
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)
    res.status(201).send(updatedMovie)
})


module.exports = movieRouter
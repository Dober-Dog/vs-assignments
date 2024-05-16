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
            await newMovie.save()
            res.status(201).send(newMovie)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    });

movieRouter.get("/:movieId", async (req, res, next) => {
    try {
        const result = await Movie.findOne({ _id: req.params.movieId })
        res.status(200).send(result)
    } catch (err) {
        res.status(404)
        return next(err)
    }
})


movieRouter.get("/search/genre", async (req, res, next) => {
    try {
        const result = await Movie.find({ genre: req.query.genre })
        res.status(200).send(result)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

movieRouter.delete("/:movieId", async (req, res, next) => {
    try {
        const result = await Movie.findByIdAndDelete({ _id: req.params.movieId })
        res.status(200).send(`Successfully deleted ${result.title} from list`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
});

movieRouter.put("/:movieId", async (req, res, next) => {
    try {
        const update = req.body
        const result = await Movie.findOneAndUpdate({ _id: req.params.movieId }, update, {
            new: true
        })
        res.status(201).send(result)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = movieRouter
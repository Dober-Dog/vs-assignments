import { useState, useEffect } from "react"
import axios from "axios"
import Movie from "./components/Movie"
import AddMovieForm from "./components/AddMovieForm"

export default function App(){
  const [movies, setMovies] = useState([])

  function getMovies(){
    axios.get("/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addMovie(newMovie){
    axios.post("/movies", newMovie)
      .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
      .catch(err => console.log("Error retrieving data, ", err))
  }

  function deleteMovie(movieId){
    axios.delete(`/movies/${movieId}`)
      .then(res => console.log(res.data))
      .then(setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId)))
      .catch(err => console.log(err))
  }

  function editMovie(updates, movieID){
    axios.put(`/movies/${movieID}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieID ? movie : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return(
    <div>
      <AddMovieForm submit={addMovie} btnText="Add Movie"/>
      { movies.map(movie => 
        <Movie {...movie} 
          key={movie.title}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
        />)}
    </div>
  )

}
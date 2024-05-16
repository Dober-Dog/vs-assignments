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

  function handleFilter(e){
    const { value } = e.target
    if(value !== 'null'){
      axios.get(`/movies/search/genre?genre=${value}`)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
    } else {
      getMovies()
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return(
    <div>
      <AddMovieForm submit={addMovie} btnText="Add Movie"/>
      <h3>Filter by Genre</h3>
      <select onChange={handleFilter}>
        <option value="null">- Select a Genre -</option>
        <option value="action">Action</option>
        <option value="fantasy">Fantasy</option>
      </select>
      { movies.map(movie => 
        <Movie {...movie} 
          key={movie.title}
          deleteMovie={deleteMovie}
        />)}
    </div>
  )

}
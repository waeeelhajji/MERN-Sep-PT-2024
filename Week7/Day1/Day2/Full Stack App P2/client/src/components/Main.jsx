import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

const Main = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {

        axios.get("http://localhost:5000/api/movies/")
            .then(res => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    const deleteMovie = (id) => {
        axios.delete("http://localhost:5000/api/movies/" + id)
            .then(res => {
                console.log("the Movie is Deleted")
                const filteredMovies = movies.filter((eachMovie) => {
                    return eachMovie._id !== id;
                });
                setMovies(filteredMovies);
            })
            .catch(err => {
                console.log(err)
            })
    }







    return (
        <div>
            <p> All Movies List</p>
            {
                movies.map((oneMovie) => {
                    return (
                        <div key={oneMovie._id}>
                            <Link to={"/movies/" + oneMovie._id}>
                                <h3>{oneMovie.title}</h3>
                            </Link>
                            <img src={oneMovie.images} alt={oneMovie.title} width="150px" />
                            <p>Release Date : {oneMovie.releaseYear}</p>
                            <p> have you seen this movie ?  {oneMovie.seen ? "yes" : "no"}</p>
                            <Link to={`/movies/${oneMovie._id}/update`}>Update Movie</Link>
                            <button onClick={() => { deleteMovie(oneMovie._id) }}>Delete Movie </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main
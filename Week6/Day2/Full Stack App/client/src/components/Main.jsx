import React, { useEffect, useState } from 'react'
import axios from "axios"

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










    return (
        <div>
            <p> All Movies List</p>
            {
                movies.map((oneMovie) => {
                    return (
                        <div key={oneMovie._id}>
                            <h3>{oneMovie.title}</h3>
                            <img src={oneMovie.images} alt={oneMovie.title} width="150px" />
                            <p>Release Date : {oneMovie.releaseYear}</p>
                            <p> have you seen this movie ?  {oneMovie.seen ? "yes" : "no"}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main
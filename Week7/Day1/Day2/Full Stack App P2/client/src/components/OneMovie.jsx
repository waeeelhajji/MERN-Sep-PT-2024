import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OneMovie = () => {
    const { id } = useParams()
    console.log(id)
    const [thisMovie, setThisMovie] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:5000/api/movies/" + id)
            .then(res => {
                console.log(res.data)
                setThisMovie(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            OneMovie :  {id}
            {
                thisMovie ? (
                    <>
                        <h2>
                            {thisMovie.title}
                        </h2>
                        <img src={thisMovie.images} alt={thisMovie.title} width='250px' />
                    </>
                ) : <h1>Loading...</h1>
            }

        </div>
    )
}

export default OneMovie
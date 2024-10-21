import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateMovie = () => {
    const [title, setTitle] = useState("")
    const [images, setImages] = useState("")
    const [releaseYear, setReleaseYear] = useState(1895)
    const [seen, setSeen] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axios.get("http://localhost:5000/api/movies/" + id)
            .then(res => {
                console.log(res.data)
                //! set all the data from or DB
                setTitle(res.data.title);
                setImages(res.data.images);
                setReleaseYear(res.data.releaseYear);
                setSeen(res.data.seen);
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const UpdateHandler = (e) => {
        e.preventDefault()
        const tempObjToSendAndUpdate = {
            title,
            images,
            releaseYear,
            seen
        }
        axios.put("http://localhost:5000/api/movies/" + id, tempObjToSendAndUpdate)
            .then(res => {
                console.log(res.data)
                setImages("")
                setTitle("")
                setReleaseYear(0)
                setSeen(false)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);

            })

    }
    return (
        <div>
            Update Movie

            <form onSubmit={UpdateHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    title :
                    <input value={title} type="text" onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    image :
                    <input value={images} type="text" onChange={e => setImages(e.target.value)} />
                </div>
                <div>
                    releaseYear :
                    <input value={releaseYear} type="text" onChange={e => setReleaseYear(e.target.value)} />
                </div>
                <div>
                    have you seen this Movie ? :
                    <input type="checkbox" checked={seen} onChange={e => setSeen(e.target.checked)} />
                </div>
                <input type="submit" value="Update Movie" />
            </form>



        </div>
    )
}

export default UpdateMovie
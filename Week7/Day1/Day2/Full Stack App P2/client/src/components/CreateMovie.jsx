import axios from 'axios'
import React, { useState } from 'react'


const CreateMovie = () => {
    const [title, setTitle] = useState("")
    const [images, setImages] = useState("")
    const [releaseYear, setReleaseYear] = useState(1895)
    const [seen, setSeen] = useState(false)
    const [errors, setErrors] = useState([])

    const submiTHandler = (e) => {
        e.preventDefault()
        const tempObj = {
            title,
            images,
            releaseYear,
            seen
        }
        axios.post("http://localhost:5000/api/movies/", tempObj)
            .then(res => {
                console.log(res.data)
                setImages("")
                setTitle("")
                setReleaseYear(0)
                setSeen(false)
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
            <h3>Create Movie Form</h3>
            <form onSubmit={submiTHandler}>
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
                <input type="submit" value="Add Movie" />
            </form>
        </div>
    )
}

export default CreateMovie
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Form = () => {

    const [heroNum, setHeroNumber] = useState(1)
    const [hero, setHero] = useState(null)

    const navigate = useNavigate()
    const { num } = useParams()

    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${num}.json`)
            .then(res => {
                console.log(res.data)
                setHero(res.data)
            }).catch(err => {
                console.log(err)
                navigate("/error")
            })
    }, [])


    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("its Working")
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroNum}.json`)
            .then(res => {
                console.log(res.data)
                setHero(res.data)
            }).catch(err => {
                console.log(err)
                navigate("/error")
            })
    }




    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={SubmitHandler}>
                <input type="number" value={heroNum} onChange={e => setHeroNumber(e.target.value)} />
                <button>Give me this Hero</button>
            </form>

            {
                hero ? (
                    <div>
                        <h3>Hero Name :{hero.name} </h3>
                        <img src={hero.images.sm} alt={hero.name} />
                    </div>
                ) : <h2>Loading...</h2>
            }
        </fieldset>
    )
}

export default Form
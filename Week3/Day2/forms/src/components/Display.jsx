import React, { useState } from 'react'

const Display = (props) => {
    console.log(props.per)
    const { per } = props
    const [groceryList, setGroceryList] = useState(["pearl onions", "thyme", "cremini mushrooms", "butter"])


    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <h2>Name : {per.UserName}</h2>
            <h2>Favorite Color : {per.UserFavColor}</h2>

            {
                groceryList.map((gro, index) => {
                    return <li key={index}>{gro}</li>
                })
            }
        </fieldset>
    )
}

export default Display
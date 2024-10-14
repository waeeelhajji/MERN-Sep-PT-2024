import React, { useState } from "react"

const AnotherComponent = (props) => {
    console.log(props.anotherData)
    const { anotherData } = props
    // alert("This button has been clicked!")
    const synth = () => {
        alert("This button has been clicked!")
    }

    //? CREATE STATE FOR THIS COMPONENT
    //!      State 
    //!       !  Change state
    //!      V      V            default state
    const [num, setNum] = useState(11)

    const incrementFunction = () => {
        // this function changes the State
        setNum(num + 1)
    }



    return (
        <fieldset>
            <legend>AnotherComponent.jsx</legend>
            {num}
            <h2>Hello from the other Component</h2>
            {anotherData}
            <button onClick={incrementFunction}>Click Me</button>
            {/* <button onClick={synth}>Click Me</button> */}

        </fieldset>
    )

}

export default AnotherComponent
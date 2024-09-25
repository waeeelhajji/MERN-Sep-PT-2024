
import { useState } from 'react';
import './App.css';
import Display from './components/Display';

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [color, setColor] = useState("")
  const [Person, setPerson] = useState({})

  const createPerson = (e) => {
    e.preventDefault()
    // console.log(name)
    // console.log(age)
    // console.log(color)

    const newPerson = {
      UserName: name,
      UserAge: age,
      UserFavColor: color
    }

    setPerson(newPerson)
    setAge(0)
    setColor("")
    setName("")

  }



  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>Forms 📝</h1>
      name : {JSON.stringify(name)} <br />
      age : {JSON.stringify(age)}<br />
      color : {JSON.stringify(color)}
      <p></p>
      <form onSubmit={createPerson}>
        <div>
          name :
          <input value={name} type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          age :
          <input value={age} type="number" onChange={(event) => setAge(event.target.value)} />
        </div>
        <div>
          Favorite Color :
          <input value={color} type="text" onChange={(e) => setColor(e.target.value)} />
        </div>
        <button>Add Person</button>
      </form>
      {JSON.stringify(Person)}

      <Display per={Person} />

    </fieldset>
  );
}

export default App;

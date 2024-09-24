import './App.css';

import AnotherComponent from "./components/AnotherComponent"

function App() {

  const w = 3;

  const message = `Hello React Dev ${w}`;
  const animals = ["🦁", "🦒", "🐊", "🦙", "👽"]
  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Our First React App </h1>
        <p>{message}</p>
        <p>{animals}</p>
        <p>{JSON.stringify(person)}</p>
        <p>{person.favFood}</p>
        <AnotherComponent anotherData={animals} />
      </header>
    </div>
  );
}

export default App;

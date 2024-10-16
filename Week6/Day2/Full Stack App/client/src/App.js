
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Main from "./components/Main"
import CreateMovie from "./components/CreateMovie"
import OneMovie from "./components/OneMovie"
import UpdateMovie from "./components/UpdateMovie"

function App() {
  return (
    <div className="App">
      <h1> Movies App 🎥🍿🎞️</h1>
      <Link to="/">Home of Movies 2️⃣</Link> ~~~~~
      <Link to="/movies/create">Add Movie ➕</Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies/create' element={<CreateMovie />} />
        <Route path='/movies/:id' element={<OneMovie />} />
        <Route path='/movies/:id/update' element={<UpdateMovie />} />
      </Routes>
    </div>
  );
}

export default App;

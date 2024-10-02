import './App.css';
import Home from "./components/Home"
import Cool from "./components/Cool"
import ErrorPage from "./components/ErrorPage"
import { Routes, Route, Link } from "react-router-dom"
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>React Routing </h1>
      {/* <a href="/home">Home 🏡</a>
      No anchor tag in React */}
      <Link to="/Home">Go Home 🏡</Link>
      <Link to="/cool">Cool Page 😎</Link>


      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/cool' element={<Cool />} />
        <Route path="/form/:num" element={<Form />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </div>
  );
}

export default App;



import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Grades from './components/Grades';
import Assignments from './components/Assignments';
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/grades" element={<Grades />}></Route>
          <Route exact path="/courses/:courseID" element={<Assignments />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/login/newUser" element={<NewUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
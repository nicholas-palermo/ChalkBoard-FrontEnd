import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Grades from './components/Grades';
import Assignments from './components/Assignments';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/grades" element={<Grades />}></Route>
          <Route exact path="/assignments" element={<Assignments />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
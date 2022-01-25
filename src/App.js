import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Grades from './components/Grades';
import Assignments from './components/Assignments';
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import ManageAccount from "./components/ManageAccount";
import ChangePassword from "./components/ChangePassword";
import ChangeEmail from "./components/ChangeEmail";
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/grades" element={<Grades />}></Route>
          <Route exact path="/courses/:courseID" element={<Assignments />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/newUser" element={<NewUser />}></Route>
          <Route exact path="/changeUsername" element={<ChangeEmail />}></Route>
          <Route exact path="/changePassword" element={<ChangePassword />}></Route>
          <Route exact path="/manageAccount" element={<ManageAccount />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
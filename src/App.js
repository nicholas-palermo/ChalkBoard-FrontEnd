import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Grades from './components/Grades';
import Assignments from './components/Assignments';
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import ChangePassword from "./components/ChangePassword";
import Navbar from './components/shared/Navbar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


class App extends React.Component{

  constructor() {
    super();
    this.state = {
      userObject: { 
        studentID: 0,
        usertype: "NoType",
        fname: "NoName",
        lname: "NoName",
        email: "NoEmail",
        pass: "NoPass"
      }
      
    }
  }

  getUser = (user) => {
    this.setState({userObject:user}, () => {
      console.log(this.state.userObject);
    });
    
  }
  

  
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>

          <Routes>
            <Route exact path="/" element={<Home user={this.state.userObject} />} />
            <Route exact path="/grades" element={<Grades />}></Route>
            <Route exact path="/courses/:courseID" element={<Assignments />}></Route>
            <Route exact path="/login" element={<Login getUser={this.getUser} />}></Route>
            <Route exact path="/newUser" element={<NewUser />}></Route>
            <Route exact path="/changePassword" element={<ChangePassword />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
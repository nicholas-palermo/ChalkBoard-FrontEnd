import React, { Fragment, useState } from "react";
import { Link, Navigate } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            let studentUser;
            await fetch(`http://localhost:5000/login/${email}`)
                .then((response) => response.json())
                .then((response) => studentUser = response)
                .then(() => {
                    if (pass === studentUser.pass) {
                        console.log("correct password");
                        props.getUser(studentUser);
                    } else {
                        console.log("invalid password");
                        
                    }
                })
                .then(() => {
                    if (pass === studentUser.pass) {
                        setRedirect(true);
                    }
                })
            } catch (err) {
                console.error(err.message);
            }
        } 

    return (
        <div className="d-flex justify-content-center flex-column">
            <div className="col-12 text-center my-3">
                <h1 className="my-3"><strong>Chalkboard</strong> Login</h1>
            </div>
            <div className="credentials bg-primary col-10 col-md-8 col-lg-6 rounded p-2 mx-auto mb-5">
                <form onSubmit={onSubmitForm}>
                    <div className="form-floating p-1 mt-1">
                        <input required type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  onChange={(e) => {setEmail(e.target.value)}}/>
                        <label htmlFor="floatingInput" className="ps-3">Email</label>
                        <div className="d-flex justify-content-center py-2">
                            <sub className="text-light">ex.John.Doe29@login.chalkboard.edu</sub>
                        </div>
                    </div>
                    <div className="form-floating p-1">
                        <input required type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPass(e.target.value)}}/>
                        <label htmlFor="floatingPassword" className="ps-3">Password</label>
                        <div className="d-flex justify-content-center py-2">
                            <sub className="text-light">ex.DoeJohn</sub>
                        </div>
                    </div>
                    <div className="buttonContainer mt-3 d-flex justify-content-center flex-column">
                        <button type="submit" className="btn btn-lg btn-dark col-6 mx-auto">Login</button>
                        <div className="support-links m-3 mb-0 p-2 d-flex justify-content-center">
                            <Link to="/newUser" className="text-light">Sign Up</Link>
                            <span className="separator m-1">|</span>

                            <Link to="/changePassword" className="text-light">Forgot Password</Link>
                            <span className="separator m-1">|</span>
                        </div>
                    </div>
                </form>
            </div>
            {/* <Credentials></Credentials> */}
        </div>
    );
}

export default Login;

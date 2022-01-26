import React from "react";
import "../App.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Login() {
    return (
        <div>

            <center>
                <div className="container cw-50 rounded-top">
                    <label className="form-label mt-4"><h1 className="title "><strong>Chalkboard</strong> Login</h1></label><br />

                </div>
                <div className="form-group ">

                    <div className="credentials bg-primary w-50 rounded p-2">
                        <form>
                            <div className="form-floating p-1">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput" className="ps-3">Email</label>
                                <sub className="text-light">ex.John.Doe29@login.chalkboard.edu</sub>
                            </div>
                            <div className="form-floating p-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword" className="ps-3">Password</label>
                                <sub className="text-light">ex.Doe&John</sub>
                            </div>
                        </form>
                        <div className="buttonContainer mt-2">
                            <button type="button" className="btn btn-lg btn-dark">Login</button>
                            <div className="support-links m-3 p-2">
                                <Link to="/newUser" className="text-light">New User</Link>
                                <span className="seperator m-1">|</span>

                                <Link to="/changeUsername" className="text-light">Change Email</Link>
                                <span className="seperator m-1">|</span>

                                <Link to="/changePassword" className="text-light">Forgot Password</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </center>

            {/* <Credentials></Credentials> */}
        </div>
    );
}

export default Login;

import React from "react";
import "../App.css";
import 'bootswatch/dist/minty/bootstrap.min.css';



function Login() {
    return (
        <div>

            <center>
      <div className=" w-50 rounded-top">
                        <label className="form-label mt-4"><h1 className="title "><strong>Chalkboard</strong> Login</h1></label><br />
                        <label className="form-label mb-4 text-dark">Log in with your <a href="./Credentials" className="text-muted" target="_blank">Chalkboard Login credentials</a></label>
                    </div>
                <div className="form-group ">
                   
                    <div className="credentials bg-primary w-50 rounded p-2">
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
                        <div className="buttonContainer mt-2">
                            <button type="button" className="btn btn-lg btn-dark ">Login</button>
                            <div className="support-links m-3 p-2">
                                <a className="text-light" target="_blank:" href="https://managelogin.cuny.edu/OIMSelfService/registration">New User</a>
                                <span className="seperator m-1">|</span>
                                <a className="text-light" target="_blank:" href="https://managelogin.cuny.edu/OIMSelfService/forgotuid">Forgot Username</a>
                                <span className="seperator m-1">|</span>
                                <a className="text-light" target="_blank:" href="https://managelogin.cuny.edu/OIMSelfService/forgotpwd">Forgot Password</a>
                                <span className="seperator m-1">|</span>
                                <a className="text-light" target="_blank:" href="https://managelogin.cuny.edu/OIMSelfService/manageAuthentication">Manage your Account</a>
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

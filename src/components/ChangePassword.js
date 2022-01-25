import React from "react";
import "../App.css";
import 'bootswatch/dist/minty/bootstrap.min.css';

function ChangePassword() {
    return (
        <div className = "row">
            <center>
                <div className="form-group">
                    <div className="credentials bg-primary w-50 rounded p-2 mt-5">
                        <div className="form-floating p-1">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="ps-3">Enter Email</label>
                            <sub className="text-light">ex.John.Doe29@login.chalkboard.edu</sub>
                        </div>
                        {/* <div className="form-floating p-1">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword" className="ps-3">Enter New Password</label>
                            <sub className="text-light">ex.Doe&John</sub>
                        </div> */}
                        <div className="buttonContainer mt-2">
                            <button type="button" className="btn btn-lg btn-dark" onClick="">Send Resend Code</button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}
export default ChangePassword;
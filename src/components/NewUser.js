import React from "react";
import "../App.css";
import 'bootswatch/dist/minty/bootstrap.min.css';


function NewUser() {
    return (
        <center>

            <div className="w-50 rounded-top">
                <label className="form-label mt-4"><h1 className="title "><strong>Chalkboard</strong> Sign up</h1></label><br />

            </div>
            <form data-bitwarden-watching="1">
                <div className="credentials-container  bg-primary w-50 rounded-bottom p-3">
                    <div className="row">
                        <div className="col form-floating  p-2">

                            <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-floating  p-2">
                            <input type="text" className="form-control" id="floatingInputFirstName" placeholder="firstName" />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        <div className="col form-floating  p-2">
                            <input type="text" className="form-control" id="floatingInputLastName" placeholder="lastName" />
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col form-floating p-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="col form-floating p-2">
                        <input type="password" className="form-control" id="floatingPassword2" placeholder="Password" />
                        <label htmlFor="floatingPassword">Re-Enter Password</label>
                    </div>
                    </div>
                    <div className="buttonContainer mt-2 pb-3">
                        <button type="button" className="btn btn-lg btn-dark">Sign up</button>

                    </div>
                </div>
            </form>
          
        </center>
    )

}

export default NewUser
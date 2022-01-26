import React, { useEffect, useState } from "react";
import "../App.css";
import 'bootswatch/dist/minty/bootstrap.min.css';


function NewUser() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [c_pass, setC_Pass] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");

    useEffect(() => {
        console.log(email);
    }, [email])

    const userType = "student";

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { userType, fname, lname, email, pass, c_pass }
            const matches = pass === c_pass;
            matches ? alert("MATCHED") : alert("NO MATCH"); 
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <center>

            <div className="w-50 rounded-top">
                <label className="form-label mt-4"><h1 className="title "><strong>Chalkboard</strong> Sign up</h1></label><br />

            </div>
            <form onSubmit={onSubmitForm} data-bitwarden-watching="1">
                <div className="credentials  bg-primary w-50 rounded-bottom">
                    <div className="form-floating  p-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating  p-2">
                        <input type="text" className="form-control" id="floatingInputFirstName" placeholder="firstName" onChange={(e) => { setfName(e.target.value) }} />
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating  p-2">
                        <input type="text" className="form-control" id="floatingInputLastName" placeholder="lastName" onChange={(e) => { setlName(e.target.value) }} />
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating p-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => { setPass(e.target.value) }} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="col form-floating p-2">
                        <input type="password" className="form-control" id="floatingPassword2" placeholder="Password" onChange={(e) => { setC_Pass(e.target.value) }} />
                        <label htmlFor="floatingPassword">Re-Enter Password</label>
                    </div>
                </div>
                <div className="buttonContainer mt-2 pb-3">
                    <button type="submit" className="btn btn-lg btn-dark">Sign up</button>

                </div>

            </form>

        </center>
    )

}

export default NewUser
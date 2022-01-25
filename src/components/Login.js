import React, {useEffect, useState} from "react";
import "../App.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Login() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        console.log(email);
    }, [email])


    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/login/${email}`);


            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    } 

    return (
        <div>

            <center>
                <div className=" w-50 rounded-top">
                    <label className="form-label mt-4"><h1 className="title "><strong>Chalkboard</strong> Login</h1></label><br />

                </div>
                <div className="form-group ">

                <div className="credentials bg-primary w-50 rounded p-2">
                        <form onSubmit={onSubmitForm}>
                            <div className="form-floating p-1">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  onChange={(e) => {setEmail(e.target.value)}}/>
                                <label htmlFor="floatingInput" className="ps-3">Email</label>
                                <sub className="text-light">ex.John.Doe29@login.chalkboard.edu</sub>
                            </div>
                            <div className="form-floating p-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPass(e.target.value)}}/>
                                <label htmlFor="floatingPassword" className="ps-3">Password</label>
                                <sub className="text-light">ex.DoeJohn</sub>
                            </div>
                            <div className="buttonContainer mt-2">
                                <button type="submit" className="btn btn-lg btn-dark ">Login</button>
                                <div className="support-links m-3 p-2">
                                    <Link to="/newUser" className="text-light">New User</Link>
                                    <span className="seperator m-1">|</span>

                                    <Link to="/changeUsername" className="text-light">Forgot Email</Link>
                                    <span className="seperator m-1">|</span>

                                    <Link to="/changePassword" className="text-light">Forgot Password</Link>
                                    <span className="seperator m-1">|</span>

                                    <Link to="/manageAccount" className="text-light">Manage your Account</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </center>

            {/* <Credentials></Credentials> */}
        </div>
    );
}

export default Login;

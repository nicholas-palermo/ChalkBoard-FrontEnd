import '../../App.css';
import logo from './logo.png';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const changeActive = (e) => {
        if (e.target.id === "nav-brand") {
            document.getElementsByClassName("active")[0].classList.toggle("active");
            document.getElementById("home").classList.toggle("active");
        }
        else {
            document.getElementsByClassName("active")[0].classList.toggle("active");
            document.getElementById(`${e.target.id}`).classList.toggle("active");
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <div className="container-fluid">
                <Link className="navbar-brand mx-0 col-5 col-md-2 col-lg-1" to={"/"} onClick={changeActive} id="nav-brand"><img className='img-fluid' src={logo} alt='ChalkBoard'></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center">
                        <Link className="nav-link active text-decoration-none px-4" to={"/"} id="home" onClick={changeActive}>Home</Link>
                        <Link className="nav-link text-decoration-none px-4" to={"/grades"} id="grades" onClick={changeActive}>Grades</Link>
                        <Link className="nav-link text-decoration-none px-4" to={"/login"} id="logout" onClick={changeActive}>Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
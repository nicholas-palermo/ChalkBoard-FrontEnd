import React, { Fragment } from "react";

const Home = () => {
    return (
        <Fragment>
            <div className="container mt-3">
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Example Alert:</strong> Extra information goes here.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <h1 className="pt-5">Welcome, [First Name]</h1>
            <div className="container pt-0 pt-md-3 pt-lg-5 my-5">
                <div className="row">
                    <div className="col-12 col-md-4 pe-md-3 pe-lg-5">
                        <div className="card">
                            <div className="card-header">
                                Courses List
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="#">2022 X Term: CSC ###</a></li>
                                <li className="list-group-item"><a href="#">2022 X Term: CSC ###</a></li>
                                <li className="list-group-item"><a href="#">2022 X Term: CSC ###</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 ps-md-3 ps-lg-5 pt-5 pt-md-0">
                        <div className="card">
                            <div className="card-header">
                                Recently Graded
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="#">#/##/2022: # / 100 on Assignment #</a></li>
                                <li className="list-group-item"><a href="#">#/##/2022: # / 100 on Assignment #</a></li>
                                <li className="list-group-item"><a href="#">#/##/2022: # / 100 on Assignment #</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
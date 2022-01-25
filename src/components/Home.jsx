import '../App.css'
import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Fragment>
            <div className="container mt-3 text-center">
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Example Alert:</strong> Extra information goes here.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <h1 className="pt-5 text-center">Welcome, [First Name]</h1>
            <div className="container pt-0 pt-md-3 pt-lg-5 my-5">
                <div className="row">
                    <div className="col-12 col-md-4 pe-md-3 pe-lg-5">
                        <div className="card border-info text-light text-center">
                            <div className="card-header bg-info">
                                Courses List
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><Link className="text-dark text-decoration-none" to={"/courses/1"}>2022 X Term: CSC ###</Link></li>
                                <li className="list-group-item"><Link className="text-dark text-decoration-none" to={"/courses/2"}>2022 X Term: CSC ###</Link></li>
                                <li className="list-group-item"><Link className="text-dark text-decoration-none" to={"/courses/3"}>2022 X Term: CSC ###</Link></li>
                            </ul>
                            <button className='btn btn-success rounded-0 rounded-bottom' data-bs-toggle="modal" data-bs-target="#addCourseModal">Add Course</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 ps-md-3 ps-lg-5 pt-5 pt-md-0">
                        <div className="card border-info text-light text-center">
                            <div className="card-header bg-info">
                                Recently Graded
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="#" className="text-dark text-decoration-none">#/##/2022: # / 100 on Assignment #</a></li>
                                <li className="list-group-item"><a href="#" className="text-dark text-decoration-none">#/##/2022: # / 100 on Assignment #</a></li>
                                <li className="list-group-item"><a href="#" className="text-dark text-decoration-none">#/##/2022: # / 100 on Assignment #</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addCourseModal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitle">Add Course</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor="termSelect">Select the term:</label>
                                    <select className="form-select" id='termSelect' aria-label="Default select example">
                                        <option value="spring2022">Spring 2022</option>
                                        <option value="summer2022">Summer 2022</option>
                                        <option value="fall2022">Fall 2022</option>
                                        <option value="winter2022">Winter 2022</option>
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="courseName">Course Name:</label>
                                    <input type="text" className="form-control text-dark" id="courseName" placeholder="CSC ###" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
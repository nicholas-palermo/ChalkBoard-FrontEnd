import React, { Fragment, useEffect, useState } from "react";
import Assignment from "./Assignment";

const Assignments = () => {
    const [view, setView] = useState("student");

    useEffect(() => {
        if (view !== "student") {
            document.getElementById("assignmentsList").classList = "col-12";
        }
    }, []);

    return (
        <Fragment>
            <h1 className="text-center my-5">CSC789 Assignments</h1>
            <div className="container">
                <div className="row mb-5">
                    {
                        view === "student" ? <Assignment></Assignment> : <Fragment></Fragment>
                    }
                    <div className="col-12 col-md-6 col-lg-8" id="assignmentsList">
                        <div className="card h-100">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-0">
                                    <h5 className="card-title bg-info p-3 text-light d-flex">Assignment #1<div className="ms-auto">Due Date: 2/12/22</div></h5>
                                    <p className="card-text px-3 pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, voluptate blanditiis. Iste delectus velit doloribus, eaque, laudantium sequi at nostrum, qui exercitationem facilis est et asperiores eveniet saepe ipsam! Autem.</p>
                                </li>
                                <li className="list-group-item p-0">
                                    <h5 className="card-title bg-info p-3 text-light d-flex">Assignment #2<div className="ms-auto">Due Date: 2/22/22</div></h5>
                                    <p className="card-text px-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos rerum ut fugit nostrum illo dolorum ducimus, officiis consequuntur exercitationem, vel velit magnam? Voluptatum consequuntur inventore provident dicta tenetur ex!</p>
                                </li>
                                <li className="list-group-item p-0">
                                    <h5 className="card-title bg-info p-3 text-light d-flex">Assignment #3<div className="ms-auto">Due Date: 2/32/22</div></h5>
                                    <p className="card-text px-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores fugiat mollitia perferendis quas quibusdam, accusamus, consequuntur eum aut et voluptate, possimus saepe. Necessitatibus, sit officiis blanditiis sed aperiam molestias.</p>
                                </li>
                            </ul>
                            {
                                view !== "student" ? <button className='btn btn-success rounded-0 rounded-bottom' id="addAssignmentBtn" data-bs-toggle="modal" data-bs-target="#addAssignmentModal">Add Assignment</button> : <Fragment></Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addAssignmentModal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitle">Add Assignment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor="assignmentName">Assignment Name:</label>
                                    <input type="text" className="form-control text-dark" id="assignmentName" placeholder="Git Good At Git" />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="assignmentDesc">Description:</label>
                                    <input type="text" className="form-control text-dark" id="assignmentDesc" placeholder="Learning the basics of using Git to push and pull code" />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="assignmentDate">Due Date:</label>
                                    <input type="date" className="form-control text-dark" id="assignmentDate" placeholder="Learning How To Use Git" />
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

export default Assignments;
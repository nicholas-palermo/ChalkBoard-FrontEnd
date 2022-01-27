import React, { Fragment, useEffect, useState } from "react";
import Assignment from "./Assignment";

const Assignments = () => {
    const [view, setView] = useState("student");
    const [assignments, setAssignments] = useState([]);


    const getAssignments = async () => {
        setAssignments([]);
        try {
            let courseAssignments;
            let courseID = window.location.href.slice(-6);
            await fetch(`http://localhost:5000/Assignments/${courseID}`)
                .then((response) => response.json())
                .then((response) => {
                    courseAssignments = response;
                })
                .then(() => {
                    console.log(courseAssignments);
                    for (let i = 0; i < courseAssignments.length; i++) {
                        setAssignments(assignments => [...assignments, {assignmentid: courseAssignments[i].assignmentid, title: courseAssignments[i].title, description: courseAssignments[i].description, datedue: courseAssignments[i].datedue.slice(0,10)}]);
                    }
                    console.log(assignments.length);
                })
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
      console.log(assignments);
    }, [assignments]);
    


    useEffect(() => {
        if (view !== "student") {
            document.getElementById("assignmentsList").classList = "col-12";
        }
        getAssignments();
    }, []);

    return (
        <Fragment>
            <h1 className="text-center my-5">{window.location.href.slice(-6)} Assignments</h1>
            <div className="container">
                <div className="row mb-5">
                    {
                        view === "student" ? <Assignment></Assignment> : <Fragment></Fragment>
                    }
                    <div className="col-12 col-md-6 col-lg-8" id="assignmentsList">
                        <div className="card h-100">
                            <ul className="list-group list-group-flush">
                                {
                                    assignments.map(assignment => {
                                        return assignment.length ? <li>No Results.</li> : (
                                            <li type="button" className="list-group-item p-0">
                                                <h5 className="card-title bg-info p-3 text-light d-flex">{assignment.title}<div className="ms-auto">Due Date: {assignment.datedue}</div></h5>
                                                <p className="card-text px-3 pb-3">{assignment.description}</p>
                                            </li>
                                        )
                                    })
                                }
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
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import "../App.css";

const Assignment = (props) => {

    const [assignment, setAssignment] = useState({});
    const [Grade, setGrade] = useState({});

    useEffect(() => {
        getAssignment();
        getGrade();
    }, [props]);


    
    useEffect(() => {
        console.log(Grade)
        document.getElementById("gradeCard").classList.remove("bg-grey", "bg-warning", "bg-danger", "bg-success");
        if (Grade.grade >= 80) {
            document.getElementById("gradeCard").classList.add("bg-success");
        } else if (Grade.grade >= 65 && Grade.grade < 80) {
            document.getElementById("gradeCard").classList.add("bg-warning");
        } else if (Grade.grade >=0 && Grade.grade < 65) {
            document.getElementById("gradeCard").classList.add("bg-danger");
        } else {
            document.getElementById("gradeCard").classList.add("bg-grey");
        }
    }, [Grade])
    
    

    const getAssignment = async () => {
        
        let assignmentID = props.assignmentID;
        if (assignmentID !== 0) {
            try {
                let courseID = window.location.href.slice(-6);
                await fetch(`http://localhost:5000/${courseID}/${assignmentID}`)
                    .then((response) => response.json())
                    .then((response) => {
                        setAssignment(response);
                    })
            } catch (err) {
    
                console.error(err.message);
                
            }
        }
    }

    const getGrade = async () => {
        
        let studentID = props.studentID;
        let assignmentID = props.assignmentID;
        if (assignmentID !== 0) {
            try {
                await fetch(`http://localhost:5000/grades/${studentID}/${assignmentID}/`)
                    .then((response) => response.json())
                    .then((response) => {
                        setGrade(response);
                    })
            } catch (err) {
                setGrade(-1);
                console.error(err.message);
            }
        }
    }


    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3 mb-sm-0">
            <div className="card h-100">
                <div id="gradeCard" className="card-header text-center text-light display-1 bg-grey">
                {
                    Grade === {} || Grade === -1 ? <Fragment>--</Fragment> : <Fragment>{Grade.grade}</Fragment>
                }
                /
                {
                    assignment.length !== 1 ? <Fragment>--</Fragment> : <Fragment>{assignment[0].maxgrade}</Fragment>
                }
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center text-dark">
                        {
                            assignment.length !== 1 ? <p className="card-text placeholder-glow"><span className="placeholder col-8"></span></p> : <p>{assignment[0].title}</p>
                        }
                    </h5>
                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Description
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                {
                                    assignment.length !== 1 ? 
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-7"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-8"></span>
                                        </p> : 
                                        <p>{assignment[0].description}</p>
                                }


                                    
                                </div>
                            </div>
                        </div>
                        <form className="p-3">
                            <label htmlFor="submission" className="form-label px-1">Submission:</label>
                            <textarea className="form-control" id="submission" rows="3"></textarea>
                            <button className="d-flex mx-auto px-3 mt-3 btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment;
import '../App.css'
import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = (props) => {

    const [courses, setCourses] = useState([{term: "Spring 2022", code: "CSC326"},{term: "Spring 2022", code: "CSC226"},{term: "Spring 2022", code: "CSC315"}]);

    const [fname, setfname] = useState();

/*
    const onLoad = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/courses/${studentID}`);
            const studentCourses = await response.json();
            console.log(studentUser);
        } catch (err) {
            console.error(err.message);
        }
    } 
*/ 

    useEffect(() => {
        console.log(props);
        setfname(props.user.fname);
    }, [props]);
  
    const resetModal = () => {
        document.getElementById("termSelect").value = "Spring2022";
        document.getElementById("courseCode").value = "";
        document.getElementById("courseName").value = "";
    }

    const addCourse = (e) => {
        e.preventDefault();
        let newTerm = document.getElementById("termSelect").value;
        let courseSubject = document.getElementById("courseSubject").value;
        let courseCode = document.getElementById("courseCode").value;
        let courseName = document.getElementById("courseName").value;
        let termRE = /[^0-9](?=[0-9])/g;
        courseCode = courseCode.slice(0,3).toUpperCase() + courseCode.slice(3);
        newTerm = newTerm.replace(termRE, '$& ');
        setCourses(courses => [...courses, {term: newTerm, code: courseCode}]);
    }

    const validateCourseCode = () => {
        let courseCode = document.getElementById("courseCode").value;
        let submitBtn = document.getElementById("submitCourseBtn");
        let courseRE = /[a-zA-Z]{3}\d{3}/;

        if (!courseRE.test(courseCode))
            submitBtn.classList.add("disabled");
        else
            submitBtn.classList.remove("disabled");
    }

    return (
        <Fragment>
            <div className="container mt-3 text-center">
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Example Alert:</strong> Extra information goes here.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <h1 className="pt-5 text-center">Welcome, {fname}</h1>
            <div className="container pt-0 pt-md-3 pt-lg-5 my-5">
                <div className="row">
                    <div className="col-12 col-md-4 pe-md-3 pe-lg-5">
                        <div className="card border-info text-light text-center">
                            <div className="card-header bg-info">
                                <b>Courses List</b>
                            </div>
                            <ul className="list-group list-group-flush">
                                {
                                    courses.map((course, idx) => {
                                        return (
                                            <li key={idx} className="list-group-item"><Link className="text-dark text-decoration-none" to={"/courses/" + idx}>{course.term}: {course.code}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                            <button className='btn btn-success rounded-0 rounded-bottom' data-bs-toggle="modal" data-bs-target="#addCourseModal" onClick={resetModal}>Add Course</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 ps-md-3 ps-lg-5 pt-5 pt-md-0">
                        <div className="card border-info text-light text-center">
                            <div className="card-header bg-info">
                                <b>Recently Graded</b>
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
                            <form onSubmit={addCourse} id='addCourse'>
                                <div className='mb-3'>
                                    <label htmlFor="termSelect">Select the term:</label>
                                    <select required className="form-select" id='termSelect'>
                                        <option value="Spring2022">Spring 2022</option>
                                        <option value="Summer2022">Summer 2022</option>
                                        <option value="Fall2022">Fall 2022</option>
                                        <option value="Winter2022">Winter 2022</option>
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="subjectSelect">Select the subject:</label>
                                    <select required className="form-select" id='subjectSelect'>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="Business">Business</option>
                                        <option value="Biology">Biology</option>
                                        <option value="Chemistry">Chemistry</option>
                                        <option value="Art">Art</option>
                                        <option value="Accounting">Accounting</option>
                                        <option value="Education">Education</option>
                                        <option value="Nursing">Nursing</option>
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="courseCode">Course Code:</label>
                                    <input required maxLength={6} type="text" className="form-control text-dark" id="courseCode" placeholder="CSC###" onChange={validateCourseCode}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="courseName">Course Name:</label>
                                    <input required type="text" className="form-control text-dark" id="courseName" placeholder="Data Structures and Algorithms"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary disabled" data-bs-dismiss="modal" form='addCourse' id='submitCourseBtn'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
import '../App.css'
import React, { Fragment, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = (props) => {

    const [courses, setCourses] = useState([]);
    const [recentGrades, setRecentGrades] = useState([]);

    const [fname, setfname] = useState();
    const [studentID, setStudentID] = useState(-1);

    useEffect(() => {
      console.log(recentGrades);
    }, [recentGrades]);
    
    

    //On load function - sets up dashboard with information from database
    const loadCourses = async () => {
       if (studentID) {
           setCourses([]);
           try {
               let studentCourses;
               await fetch(`http://localhost:5000/courses/${studentID}`)
                .then((response) => response.json())
                .then((response) => studentCourses = response)
                .then(() => {
                    let termRE = /[^0-9](?=[0-9])/g;
                    for(let i = 0; i < studentCourses.length; i++) {
                        let term = studentCourses[i].term.replace(termRE, '$& ');
                        term = term[0].toUpperCase() + term.slice(1);
                        setCourses(courses => [...courses, {term: term, code: studentCourses[i].courseid}]);
                    }
                })
           } catch (err) {
               console.error(err.message);
           }
       }
    } 

    //On load function - sets up dashboard with information from database
    const loadRecentGrades = async () => {
        if (studentID) {
            setRecentGrades([]);
            try {
                await fetch(`http://localhost:5000/recentGrades/${studentID}`)
                 .then((response) => response.json())
                 .then((response) => setRecentGrades(response))
                 .then(() => {
                     /*
                     let termRE = /[^0-9](?=[0-9])/g;
                     for(let i = 0; i < studentCourses.length; i++) {
                         let term = studentCourses[i].term.replace(termRE, '$& ');
                         term = term[0].toUpperCase() + term.slice(1);
                         setCourses(courses => [...courses, {term: term, code: studentCourses[i].courseid}]);
                        }
                        */
                 })
            } catch (err) {
                console.error(err.message);
            }
        }
     } 

    //Performs loadCourses functions
    useEffect(() => {
        setfname(props.user.fname);
        setStudentID(props.user.studentid);
    }, [props]);
  
    useEffect(() => {
        loadCourses();
        loadRecentGrades();
    }, [studentID]);



    const resetModal = () => {
        document.getElementById("termSelect").value = "Spring2022";
        document.getElementById("courseID").value = "";
        document.getElementById("courseName").value = "";
    }


    //Add course functionality
    const addCourse = (e) => {
        e.preventDefault();
        let term = document.getElementById("termSelect").value;
        let newTerm = term;
        let courseSubject = document.getElementById("courseSubject").value;
        let facultyID = 115;
        let courseID = document.getElementById("courseID").value;
        let courseName = document.getElementById("courseName").value;
        let termRE = /[^0-9](?=[0-9])/g;
        courseID = courseID.slice(0,3).toUpperCase() + courseID.slice(3);
        newTerm = newTerm.replace(termRE, '$& ');
        newTerm = newTerm[0].toUpperCase() + newTerm.slice(1);
        setCourses(courses => [...courses, {term: newTerm, code: courseID}]);

        addCourseToDB(courseID, courseName, facultyID, term, courseSubject);
        enrollInCourse(studentID, courseID, term);

    }

    //add course to databse after add-course form is submit
    const addCourseToDB = async (courseID, courseName, facultyID, term, courseSubject) => {
        try {
            const body = { courseID, courseName, facultyID, term, courseSubject }
            const response = await fetch("http://localhost:5000/newCourse", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
    
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    //enrolls student in course by creating a studentCourse tuple for add-course form
   const enrollInCourse = async (studentID, courseID, term) => {
        try {
            const body = { studentID, courseID, term }
            const response = await fetch("http://localhost:5000/newStudentCourse", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
   }

    const validatecourseID = () => {
        let courseID = document.getElementById("courseID").value;
        let submitBtn = document.getElementById("submitCourseBtn");
        let courseRE = /[a-zA-Z]{3}\d{3}/;

        if (!courseRE.test(courseID))
            submitBtn.classList.add("disabled");
        else
            submitBtn.classList.remove("disabled");
    }

    return (
        <Fragment>
            { studentID === undefined ? <Navigate to="/login" /> : <Fragment /> }
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
                                            <li key={idx} className="list-group-item"><Link className="text-dark text-decoration-none" to={"/courses/" + course.code}>{course.term}: {course.code}</Link></li>
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
                                {
                                    recentGrades.map((recentGrade) => {
                                        return (
                                            <li className="list-group-item"><a href="#" className="text-dark text-decoration-none">{recentGrade.dategraded.slice(0,10)}: {recentGrade.grade}/{recentGrade.maxgrade} on {recentGrade.title} – {recentGrade.courseid}</a></li>
                                        )
                                    })
                                }
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
                                        <option value="spring2022">Spring 2022</option>
                                        <option value="summer2022">Summer 2022</option>
                                        <option value="fall2022">Fall 2022</option>
                                        <option value="winter2022">Winter 2022</option>
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="subjectSelect">Select the subject:</label>
                                    <select required className="form-select" id='courseSubject'>
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
                                    <label htmlFor="courseID">Course Code:</label>
                                    <input required maxLength={6} type="text" className="form-control text-dark" id="courseID" placeholder="CSC###" onChange={validatecourseID}/>
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
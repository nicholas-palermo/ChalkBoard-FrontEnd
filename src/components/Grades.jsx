import React, { Fragment, useState, useEffect } from "react";
import '../App.css';

const Grades = (props) => {
    const {grades, setGrades}=useState([]);
    const [courses,setCourses]=useState([]);
    const [studentID, setstudentID] = useState();
    const [assignments, setAssignments] = useState([]);
    const [assignmentID, setAssignmentID] = useState(0);
    const [grade, setGrade] = useState();

    useEffect(() => {
      console.log(courses);
    }, [courses]);
    
    useEffect(() => {
      for(let i = 0; i < assignments.length; i++) {
        getGrade(assignments[i].assignmentid);
      }
    }, [assignments]);

    useEffect(() => {
      console.log(grade);
    }, [grade]);
    
    const onLoad = async () => {
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

    useEffect(() => {
        setstudentID(props.user.studentid);
    }, [props]);

    useEffect(() => {
        onLoad();
    }, [studentID]);

    const getAssignments = async (courseID) => {
        setAssignments([]);
        try {
            let courseAssignments;
            await fetch(`http://localhost:5000/Assignments/${courseID}`)
                .then((response) => response.json())
                .then((response) => {
                    courseAssignments = response;
                })
                .then(() => {
                    for (let i = 0; i < courseAssignments.length; i++) {
                        setAssignments(assignments => [...assignments, {assignmentid: courseAssignments[i].assignmentid, title: courseAssignments[i].title, description: courseAssignments[i].description, datedue: courseAssignments[i].datedue.slice(0,10)}]);
                    }
                })
        } catch (err) {
            console.error(err.message);
        }
    }

    const getGrade = async (assignmentID) => {
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

    const changeCourse = (e) => {
        let title = document.getElementById("courseName");
        title.innerText = e.target.value;
        getAssignments(e.target.value);
    }
    
    return (
        <Fragment>
            <h1 className="d-flex justify-content-center my-3 mt-4">Grades</h1>
            <div className="container-lg d-flex flex-column justify-content-between">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-9 col-lg-6 grades mb-5" id="grades">
                        <div className="dropdown">
                            <button className="btn btn-info dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose Course
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                                {
                                    courses.map(course => {
                                       return <li><button className="dropdown-item text-center" value={course.code} onClick={changeCourse}>{course.code}</button></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center mb-0 mt-3">
                            <h3><strong id="courseName"></strong></h3>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <h5 className="card-title m-0"><u><strong>Assignment Name</strong></u></h5>
                                <h5><u><strong>Date Graded</strong></u></h5>
                                <h5><u><strong>Grade</strong></u></h5>
                            </div>
                        </div>
                        <div className="cards-container" id="card-deck">
                            {
                                assignments.map(assignment => {
                                    return (
                                        <div className="card">
                                            <div className="card-body d-flex flex-row justify-content-between">
                                                <div className="flex-even">
                                                    <h5 className="card-title m-0">{assignment.title}</h5>
                                                    <sup className="m-0">Due Date: {assignment.datedue}</sup>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-end flex-even">
                                                    <p className="m-0">Grade Pending</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-end flex-even">
                                                    <p className="badge fs-5 bg-primary text-wrap m-0">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Grades;
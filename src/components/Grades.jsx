import React, { Fragment, useState } from "react";

const Grades = () => {
    const {grades, setGrades}=useState([]);
    const getClasses= async(e)=>{
        e.preventDefault();
        try {
            const response=await (await fetch('http://localhost:5000/login')).json();
            setGrades(response.data);
        } catch (err) {
            console.error(err.message);
        }
    }
    const changeCourse = (e)=>{
        let title=document.getElementById("courseName");
        title.innerText=e.target.value;
        getClasses();
        

    }
    return (
        <Fragment>
            <h1 className="d-flex justify-content-center my-3 mt-4">Grades</h1>
            <div className="container-lg d-flex flex-column justify-content-between">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 grades mb-5" id="grades">
                        <div className="dropdown">
                            <button className="btn btn-info dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose Course
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                                <li><button className="dropdown-item text-center" value="CSC338" onClick={changeCourse}>CSC 338</button></li>
                                <li><button className="dropdown-item text-center" value="MTH229" onClick={changeCourse}>MTH 229</button></li>
                                <li><button className="dropdown-item text-center" value="ART101" onClick={changeCourse}>ART 101</button></li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center mb-0 mt-3">
                            <h3><strong id="courseName"></strong></h3>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <h5 className="card-title m-0"><u><strong>Assignment Name</strong></u></h5>
                                <h5><u><strong>Date Updated</strong></u></h5>
                                <h5><u><strong>Grade</strong></u></h5>
                            </div>
                        </div>
                        <div className="cards-container" id="card-deck">
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <div>
                                        <h5 className="card-title m-0">Assignment X</h5>
                                        <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">xx/xx/xxxx</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="badge fs-5 bg-primary text-wrap m-0">84%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Grades;
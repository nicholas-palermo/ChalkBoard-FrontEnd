import React, { Fragment } from "react";

const Grades = () => {
    const getGrades=(e)=>{
        let gradebox = document.getElementById("grades");
        if (e.value === "class-1"){
        }
    }
    return (
        <Fragment>
            <h1 className="d-flex justify-content-center my-3 mt-4">Grades</h1>
            <div className="container-lg d-flex flex-column justify-content-between">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 grades mb-5" id="grades">
                        <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose Course
                            </button>
                            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item text-center" value="class1">CSC 338</a></li>
                                <li><a class="dropdown-item text-center" value="class2">MTH 229</a></li>
                                <li><a class="dropdown-item text-center" value="class3">ART 101</a></li>
                            </ul>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <h5 className="card-title m-0"><u><strong>Assignment Name</strong></u></h5>
                                <h5><u><strong>Date Updated</strong></u></h5>
                                <h5><u><strong>Grade</strong></u></h5>
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
        </Fragment>
    )
}
export default Grades;
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
            <div className="container-lg d-flex flex-row">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-6 my-2 courses">
                        <div className="d-flex justify-content-center flex-wrap">
                            <button className="col-5 col-md-12 my-2 p-3 p-md-5 m-2 btn btn-info fs-5" value="class-1" onClick={getGrades}>CSC 111-D004<br/>LEC(56468)</button>
                            <button className="col-5 col-md-12 my-2 p-3 p-md-5 m-2 btn btn-info fs-5" value="class-2" onClick={getGrades}>CSC 222-D004<br/>LEC(51488)</button>
                            <button className="col-5 col-md-12 my-2 p-3 p-md-5 m-2 btn btn-info fs-5" value="class-3" onClick={getGrades}>CSC 333-D004<br/>LEC(87645)</button>
                            <button className="col-5 col-md-12 my-2 p-3 p-md-5 m-2 btn btn-info fs-5" value="class-4" onClick={getGrades}>CSC 444-D004<br/>LEC(43685)</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 grades mb-5" id="grades">
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
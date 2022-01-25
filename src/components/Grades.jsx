import React, { Fragment } from "react";

const Grades = () => {
    const getGrades=(e)=>{
        let gradebox=document.getElementById("grades");
        if (e.value=="class-1"){
        }
    }
    return (
        <Fragment>
            <h2 className="d-flex justify-content-center"><u>Grades</u></h2>
            <div className="container d-flex flex-row">
                <div className="row d-flex justify-content-between">
                    <div className="col-6 my-2 courses">
                        <button className="btn w-100 my-2 mt-5 p-5 btn-lg btn-info" value="class-1" onClick={getGrades}>CSC 111-D004<br/>LEC(56468)</button>
                        <button className="btn w-100 my-2 p-5 btn-lg btn-info" value="class-2" onClick={getGrades}>CSC 222-D004<br/>LEC(51488)</button>
                        <button className="btn w-100 my-2 p-5 btn-lg btn-info" value="class-3" onClick={getGrades}>CSC 333-D004<br/>LEC(87645)</button>
                        <button className="btn w-100 my-2 p-5 btn-lg btn-info" value="class-4" onClick={getGrades}>CSC 444-D004<br/>LEC(43685)</button>
                    </div>
                    <div className="col-6 grades" id="grades">
                        <div className="card mt-3">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0"><u><strong>Assignment Name</strong></u></h5>
                                </div>
                                <div>
                                    <h5><u><strong>Date Updated</strong></u></h5>
                                </div>
                                <div>
                                    <h5><u><strong>Grade</strong></u></h5>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row justify-content-between">
                                <div>
                                    <h5 className="card-title m-0">Assignment X</h5>
                                    <sup className="m-0">Due Date:xx/xx/xxxx</sup>
                                </div>
                                <div>
                                    xx/xx/xxxx
                                </div>
                                <div>
                                    <p className="badge fs-5 bg-primary text-wrap">84%</p>
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
import React from "react";
import "../App.css";
import 'bootswatch/dist/minty/bootstrap.min.css';

function ChangePassword() {
    return (
        <div className = "row">
            <center>
                <div className="form-group">
                    <div className="credentials bg-primary w-50 rounded p-2 mt-5">
                        <div className="form-floating p-1">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="ps-3">Enter Email</label>
                            <sub className="text-light">ex.John.Doe29@login.chalkboard.edu</sub>
                        </div>
                        <div className="buttonContainer mt-2">
                            <button type="button" className="btn btn-lg btn-dark" data-bs-toggle="modal" data-bs-targetad="#resetPasswordModal">Send Resend Code</button>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="resetPasswordModal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitle">Reset Password</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className='mb-3'>
                                    <label htmlFor="termSelect">Enter Code</label>
                                    <input type="text" className="form-control text-dark" id="courseName"/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="termSelect">Old Password</label>
                                    <input type="text" className="form-control text-dark" id="courseName"/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="courseName">New Password</label>
                                    <input type="text" className="form-control text-dark" id="courseName"/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="courseName">Confirm New Password</label>
                                    <input type="text" className="form-control text-dark" id="courseName"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save new password</button>
                        </div>
                    </div>
                </div>
                </div>
            </center>
        </div>
    );
}
export default ChangePassword;
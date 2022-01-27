import React from "react";

function ChangePassword() {
    return (
        <div className="d-flex justify-content-center flex-column">
            <div className="col-12 text-center my-3">
                <h1 className="my-3">Forgot Your Password</h1>
            </div>
            <div className="form-group">
                <div className="credentials bg-primary col-10 col-md-8 col-lg-6 rounded p-2 mx-auto">
                    <div className="form-floating p-1">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" className="ps-3">Enter Email</label>
                        <div className="d-flex justify-content-center p-2">
                            <sub className="text-light">ex.John.Doe29@login.chalkboard.edu</sub>
                        </div>
                    </div>
                    <div className="buttonContainer mt-2 d-flex justify-content-center">
                        <button type="button" className="btn btn-lg btn-dark mb-2" data-bs-toggle="modal" data-bs-target="#resetPasswordModal">Send Reset Code</button>
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
                                    <label htmlFor="code">Enter Code</label>
                                    <input type="text" className="form-control text-dark" id="code"/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="oldpass">Old Password</label>
                                    <input type="text" className="form-control text-dark" id="oldpass"/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="newpass">New Password</label>
                                    <input type="text" className="form-control text-dark" id="newpass"/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="newpassconfirm">Confirm New Password</label>
                                    <input type="text" className="form-control text-dark" id="newpassconfirm"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save new password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChangePassword;
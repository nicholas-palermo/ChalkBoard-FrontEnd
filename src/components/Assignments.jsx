import React, { Fragment } from "react";

const Assignments = () => {
    return (
        <Fragment>
            <h1 className="text-center my-5">CSC789 Assignments</h1>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-sm-0">
                        <div className="card h-100">
                            <div className="card-header text-center text-light display-1 bg-success">90/100</div>
                            <div className="card-body">
                                <h5 className="card-title text-center text-dark">Assignment #1</h5>
                                <div className="accordion accordion-flush" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Description
                                        </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste architecto vel adipisci cumque fugit numquam modi maiores. Neque nisi aut omnis doloribus autem quo reprehenderit placeat adipisci ipsam facere!
                                            </div>
                                        </div>
                                    </div>
                                    <form className="p-3">
                                        <label htmlFor="submission" className="form-label px-1">Submission:</label>
                                        <textarea className="form-control" id="submission" rows="3"></textarea>
                                        <button className="d-flex mx-auto px-3 mt-3 btn btn-success" type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="card h-100">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-0">
                                    <h5 className="card-title bg-info p-3 text-light">Assignment #1</h5>
                                    <p className="card-text px-3 pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, voluptate blanditiis. Iste delectus velit doloribus, eaque, laudantium sequi at nostrum, qui exercitationem facilis est et asperiores eveniet saepe ipsam! Autem.</p>
                                </li>
                                <li className="list-group-item p-0">
                                    <h5 className="card-title bg-info p-3 text-light">Assignment #2</h5>
                                    <p className="card-text px-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos rerum ut fugit nostrum illo dolorum ducimus, officiis consequuntur exercitationem, vel velit magnam? Voluptatum consequuntur inventore provident dicta tenetur ex!</p>
                                </li>
                                <li className="list-group-item p-0">
                                    <h5 className="card-title bg-info p-3 text-light">Assignment #3</h5>
                                    <p className="card-text px-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores fugiat mollitia perferendis quas quibusdam, accusamus, consequuntur eum aut et voluptate, possimus saepe. Necessitatibus, sit officiis blanditiis sed aperiam molestias.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Assignments;
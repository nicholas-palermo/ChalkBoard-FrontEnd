import React, { useEffect, useState } from "react";

function NewUser() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");

    useEffect(() => {
        console.log(email);
    }, [email])

    const userType = "student";

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { userType, fname, lname, email, pass }
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    } 

    return (
        <div className="d-flex justify-content-center flex-column">
            <div className="col-12 my-3 text-center">
                <h1 className="my-3"><strong>Chalkboard</strong> Sign up</h1>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className="col-10 col-md-8 col-lg-6 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
                    <div className="form-floating p-1 my-1">
                        <input required type="email" className="form-control" id="email" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value)}} />
                        <label htmlFor="email" className="ps-3">Email</label>
                    </div>
                    <div className="form-floating p-1 my-1">
                        <input required type="text" className="form-control" id="fname" placeholder="firstName" onChange={(e) => {setfName(e.target.value)}}/>
                        <label htmlFor="fname" className="ps-3">First Name</label>
                    </div>
                    <div className="form-floating p-1 my-1">
                        <input required type="text" className="form-control" id="lname" placeholder="lastName" onChange={(e) => {setlName(e.target.value)}}/>
                        <label htmlFor="lname" className="ps-3">Last Name</label>
                    </div>
                    <div className="form-floating p-1 my-1">
                        <input required type="password" className="form-control" id="pass" placeholder="Password" onChange={(e) => {setPass(e.target.value)}}/>
                        <label htmlFor="pass" className="ps-3">Password</label>
                    </div>
                    <div className="form-floating p-1 my-1">
                        <input required type="password" className="form-control" id="comparePass" placeholder="Password" />
                        <label htmlFor="comparePass" className="ps-3">Re-Enter Password</label>
                    </div>
                        <button type="submit" className="btn btn-lg btn-dark col-6 mx-auto m-2">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default NewUser
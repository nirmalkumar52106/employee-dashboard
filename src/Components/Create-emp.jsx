import React from "react";
import { Navbar } from "../Navbar";
import { ToastContainer, toast } from 'react-toastify';

function CreateEmploye() {

    const [email, updateEmail] = React.useState()

    const setEmail = (e) => {

        updateEmail(e.target.value)
        updateEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }

    //post employe api.................................
    const Formsubmit = async (e) => {
        e.preventDefault();
          
        const response = await fetch('http://localhost:8080/emp-post', {
            method: 'POST',
            body: JSON.stringify(email),

            headers: {
                'Content-Type': 'application/json'
            }
        })

        const getdata = await response.json();
        console.log(getdata)
        toast.success("user created")

    }


    return (
        <>
        <Navbar/>
        <ToastContainer position="top-center"/>
            <section id="employe-form">
                <h1>Employe-registration</h1>
                <div className="form-wrapper">
                    <form onSubmit={Formsubmit}>
                        <div className="form__field">
                        <input
                            onChange={setEmail}
                                id="email"
                                className="form__input"
                                placeholder="Enter your name"
                                type="text"
                              name="name"
                              pattern="[a-zd.]{5,} "
                              required
                            />
                             <span class="icon"></span>
                        </div>
                   
                       

                            <input
                            onChange={setEmail}
                                id="password"
                                className="app-form-control"
                                placeholder="enter your email"
                                type="email"
                                name="email"
                                
                            />
                            <br/>
                             <input
                            onChange={setEmail}
                                id="number"
                                className="app-form-control"
                                placeholder="enter your number"
                                type="text"
                                name="number"
                                
                            />
                            <br/>
                            
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </section>
        </>
    )
}

export { CreateEmploye }
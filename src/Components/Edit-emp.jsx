import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { useSearchParams } from "react-router-dom";


function Editemloye() {
     const [email, updateEmail] =useState()
     const [name,updatename]=useState()
     const [number,updatenumber]=useState()


    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

     const setemail=(e)=>{
         updateEmail(e.target.value)
    }
    const setname=(e)=>{
        updatename(e.target.value)
    }
    const setnumber=(e)=>{
        updatenumber(e.target.value)
    }

   

    const [userData, setUserData] = useState();
    const fetchData = async (e) => {
        const response = await fetch(`http://localhost:8080/employee/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const getdata = await response.json();
        setUserData(getdata.user);
        console.log(getdata);
    }  

    useEffect(()=>{
        fetchData();
    },[]);



    const Formsubmit = async (e) => {
        const response = await fetch(`http://localhost:8080/employee/${e}`, {
            method: 'PATCH',
        body: JSON.stringify({
            "name":name,
            "email":email,
            "number":number,
        }),

            headers: {
                'Content-Type': 'application/json'
            }
        })
        const getdata = await response.json();
        console.log(getdata)
    }   
    return (
        <>
        <Navbar/>
            <section id="employe-form">
                <h1>Employe-update</h1>
                <div className="form-wrapper">
                    <input
                            id="email"
                            className="app-form-control"
                            placeholder={userData && userData.name}
                            type="text"  
                            name="name"
                             value={name}
                             onChange={setname}
                            />
                            <br />

                            <input
                           
                                id="password"
                                className="app-form-control"
                                value={email}
                                onChange={setemail}
                                type="email"
                                name="email"
                           
                                   placeholder={userData && userData.email}
                            />
                            <br/>
                             <input
                         
                                id="number"
                                className="app-form-control"
                                
                                type="text"
                                name="number"
                                value={number}
                                onChange={setnumber}
                                   placeholder={userData && userData.number}
                                
                            />
                            <br/>
                            
                        <button onClick={()=>Formsubmit(userData && userData._id)} >Submit</button>

                </div>
            </section>
        </>
    )
}

export { Editemloye }
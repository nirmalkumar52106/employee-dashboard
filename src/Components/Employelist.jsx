import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


export default function Employelist() {
    const [list, setlist] = useState([])

   
    async function getlistdata() {
        const response = await fetch("http://localhost:8080/emp-get")
        const newresonse = await response.json();
        setlist(newresonse)
    }
    
    useEffect(() => {
        getlistdata();
    }, [])


    //delete-employe-api...............................
    const Deleteemloye = async (e) => {
        const response = await fetch(`http://localhost:8080/employee/${e}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const getdata = await response.json();
        toast.success(getdata.message)
        console.log(getdata)
    }
  
    return (
        <>
        <Navbar/>
        <ToastContainer position="top-center" />
            <div className="employe-list">
                <table border="2px">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                  {
                    list.length>0?<>
                      {
                        list.map((data) => {
                            return (
                                <>
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.number}</td>
                                        <td><button onClick={()=>Deleteemloye(data._id)}   className="dlt">Delete</button></td>
                                        <td><Link to={`/edit-employ?id=${data._id}`}>Edit</Link></td>
                                    </tr>
                                </>
                            )
                        })
                    }</>:
                    <>
                    <div className="loader">
                    <img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="image"/>
                    <p>Plz add some user...</p>
                    <Link to="/register-employe">ADD..</Link>
                    </div>
                    </>
                  }
                </table>
            </div>


        </>
    )
}
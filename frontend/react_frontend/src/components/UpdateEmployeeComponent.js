import React, {Component, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

export default function UpdateEmployee(props)
{
    let navigate=useNavigate();
    const [fname,setFName]=useState("");
    const [lname,setLName]=useState("");
    const [email,setEmail]=useState("");
    const {id}=useParams();

    useEffect(()=>{

        EmployeeService.getEmployeeById(id).then((res)=>{
            setFName(res.data.fname);
            setLName(res.data.lname);
            setEmail(res.data.email);
        }).catch(error=>{
            console.log(error);
        })

    },[])

    const updateHandler=(e)=>
        {
            e.preventDefault();
            const employee={fname,lname,email};
        
            if(id)
            {
              EmployeeService.updateEmployee(id,employee).then(res=>
                {
                    navigate('/employees');
                });
            }
            else{
                EmployeeService.createEmployee(employee).then(res=>
                    {
                        console.log(res.data);
                        navigate('/employees');
                    }
                )
            }
        }
    

     const cancelHandler=(e)=>
        {
            navigate('/employees');
        }
        return (
            <div className="container mt-3">
                <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Employee</h3>
                    <div className="card-body">
                      <form>
                        <div className="form-group my-2">
                          <label>First Name:</label>
                          <input placeholder="First Name" name="fname" className="form-control"
                                 value={fname} onChange={(e)=> setFName(e.target.value)}/>
                        </div>
                        <div className="form-group my-2">
                          <label>Last Name:</label>
                          <input placeholder="Last Name" name="lname" className="form-control"
                                 value={lname} onChange={(e)=> setLName(e.target.value)}/>
                        </div>
      
                        <div className="form-group my-2">
                          <label>Email:</label>
                          <input placeholder="Email" name="email" className="form-control"
                                 value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <button className='btn btn-success' onClick={updateHandler}>save</button>
                        <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                      </form>
                    </div>
                  </div>
                </div>  
            </div>
       )
}

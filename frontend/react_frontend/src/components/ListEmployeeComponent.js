import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
export default class ListEmployeeComponent extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            employees:[]
        }
    }
    componentDidMount()
	{
      		  EmployeeService.getEmployees().then((res)=>
        	{
            	this.setState({employees:res.data})
        	})
   	 }
     deleteEmployee=(employeeId)=>
        {
            EmployeeService.deleteEmplyoee(employeeId).then(res=>
                {
                    EmployeeService.getEmployees().then((res)=>
                        {
                            this.setState({employees:res.data})
                        }).catch(error=>
                            {
                                console.log(error);
                            })
                }
            )
        }
  render() {
    return (
    <div>
        <h2 className='text-center'>Employee List</h2>
        <div className='row'>
            <Link to="/post" className='btn btn-outline-primary mt-4 w-100'>Add Employee</Link>
            <table className='table  table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            (employee, index)=>
                            <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>{employee.id}</td>              
                                  <td>{employee.fname}</td>
                                  <td>{employee.lname}</td>
                                  <td>{employee.email}</td> 
                                  <td><Link to={`/update/${employee.id}`} className='btn btn-info'>Update</Link>
                                  <button className='btn btn-danger' style={{marginLeft: "15px"}} onClick={()=>
                                    this.deleteEmployee(employee.id)
                                  }>Delete</button> </td> 
                            </tr>
                        )
                            
                    }
                </tbody>
            </table>
        </div>        
  </div>

    )
  }
}

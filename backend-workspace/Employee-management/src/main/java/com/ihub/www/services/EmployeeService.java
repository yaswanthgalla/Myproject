package com.ihub.www.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.Employee;
import com.ihub.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository emprepo;
	
	public List<Employee> getAllEmployees()
	   {
		   return emprepo.findAll();
	   }
	public Employee createEmployee( Employee employee)
	   {
		   return emprepo.save(employee);
	   }
	   public Employee getEmployeeById(Long id)
	   {
		   return emprepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("id not found"));
	   }
	   public ResponseEntity<Employee> updateEmployee(Long id, Employee employee)
	   {

			Employee emp=emprepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee Does not exist"));
			emp.setFname(employee.getFname());
			emp.setLname(employee.getLname());
			emp.setEmail(employee.getEmail());
			Employee updateEmp=emprepo.save(emp);
			return ResponseEntity.ok(updateEmp);

	   }
	   public ResponseEntity<HttpStatus> deleteEmployee(long id)
	   {
		   Employee emp=emprepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee Does not exist"));
		   emprepo.delete(emp);
		   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   }
	

}

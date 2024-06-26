package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/employees")
@CrossOrigin("http://localhost:7777")
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@PostMapping("/addEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return service.addEmployee(employee);
	}
	@GetMapping
	public List<Employee> getEmployees() {
		return service.getEmployees();
	}
	@GetMapping("/{id}")
	public Employee getEmployee(@PathVariable int id) {
		return service.getEmployee(id);
	}
	@PutMapping("/editEmployee/{id}")
	public Employee updateEmployee(@RequestBody Employee employee,@PathVariable int id) {
		employee.setId(id);
		return service.updateEmployee(employee);
	}
	@DeleteMapping("/deleteEmployee/{id}")
	public void deleteEmployee(@PathVariable int id) {
		 service.deleteEmployee(id);

	}
	

}

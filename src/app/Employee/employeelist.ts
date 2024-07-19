import { Component } from '@angular/core';


@Component({
  selector: 'emp_data',
  template:`<h1> {{title}}</h1>`
  
})



export class EmployeelistComponent {
  title = 'Employee list present in the Application';
}



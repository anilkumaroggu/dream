import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
   employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      skills: new FormGroup({
        skillName: new FormControl(''),
        expInYears: new FormControl(''),
        proficiency: new FormControl('')
      })
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm);
  }

// function emailDomain(control: AbstractControl): { [key: string]: any } | null {
//   const email: string = control.value;
//   const domain = email.substring(email.lastIndexOf('@') + 1);
//   if domain.toLocaleLowerCase() === 'anil.oggu.com' {
//     return null;
//   } else {
//     return { 'emailDomain': true };
//   }
// }

edit() {
  console.log(this.employeeForm);
}
}

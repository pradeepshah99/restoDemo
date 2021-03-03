import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyrestroService } from '../myrestro.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted = false;
  registerForm = this.formBuilder.group({

    fullName: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(7)]],
    address : ['', Validators.required],
    phone : ['', [Validators.required, Validators.minLength(10)]]



  });

  constructor(private formBuilder:FormBuilder, private router : Router, private service: MyrestroService) { }
  


  ngOnInit(): void {
  }

  get fullName() {return this.registerForm.get('fullName')};
 get email() {return this.registerForm.get('email')};
 get password() {return this.registerForm.get('password')};
 get address() {return this.registerForm.get('address')};
 get phone() {return this.registerForm.get('phone')};



 
 onSubmit(){

   


  
  this.submitted = true;

  if(this.registerForm.invalid)
  {
    this.registerForm.get('fullName').markAllAsTouched();


    this.registerForm.get('email').markAllAsTouched();
    this.registerForm.get('password').markAllAsTouched();
    this.registerForm.get('address').markAllAsTouched();
    this.registerForm.get('phone').markAllAsTouched();




  } else {
    this.service.userRegister({
      fullName:this.registerForm.value.fullName,
      email: this.registerForm.value.email,
      password:this.registerForm.value.password,
      address:this.registerForm.value.address,
      phone:this.registerForm.value.phone,


    }).subscribe((res)=>
    {

    })
  
    this.router.navigateByUrl('/login');
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

}

}

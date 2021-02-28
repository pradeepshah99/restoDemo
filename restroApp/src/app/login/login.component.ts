import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyrestroService } from '../myrestro.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private fb: FormBuilder, private router : Router, private service: MyrestroService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email,Validators.pattern(this.emailRegex)]),
      "password": new FormControl(null,[Validators.required,Validators.minLength(4)]),


    })
  }

  onSubmit(){
    this.service.loginUser(this.loginForm.value).subscribe(
      res=>{
        this.service.setToken(res['token']);
        this.loginForm.reset();
       this.toastr.success("login")
        this.router.navigate(['/profile'])
      },error=>{
        this.toastr.error("you are not registered!")
        this.router.navigate(['/signup'])
      }
    )
  }

}

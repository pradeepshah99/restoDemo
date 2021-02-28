import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyrestroService } from '../myrestro.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  editForm: FormGroup;
  isEdit : any;
  userDetails: any;



  constructor(private route : ActivatedRoute, private fb:FormBuilder, private service : MyrestroService, private router: Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      "fullName": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(4)]),
      "address": new FormControl(null, [Validators.required, Validators.minLength(10)]),
      "phone": new FormControl(null, [Validators.required, Validators.minLength(10)])

    });
    this.route.queryParams.subscribe(param => {
      this.isEdit = param.id;
      if (this.isEdit) {
        this.getUserById();
      }
    })
  }

  getUserById() {
    this.service.getUserProfile().subscribe(
      res => {

        this.userDetails = res['user'];
        this.setForm(this.userDetails)
      },
      err => { console.log(err); }
    )
  }
  setForm(data) {
    this.editForm.patchValue({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      address: data.address,
      phone: data.phone

    })
  }

  
  onSubmit() {
    let data = {
      fullName: this.editForm.value.fullName,
      email: this.editForm.value.email,
      address: this.editForm.value.address,
      phone: this.editForm.value.phone
    }


    this.service.updateUser(this.userDetails._id,data).subscribe(
      res => {
        this.toastr.success("updated!");
        this.router.navigate(['/profile'])

      })
  }

}

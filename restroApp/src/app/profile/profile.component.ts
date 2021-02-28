import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyrestroService } from '../myrestro.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails : any;


  constructor(private service : MyrestroService , private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user']
      },err=>{console.log(err);
      }
    );
  }

  onLogout(){
    this.service.deleteToken();
    this.toastr.error('logged Out')
    this.router.navigateByUrl('/');
    

  }

}

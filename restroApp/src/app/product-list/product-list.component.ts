import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyrestroService } from '../myrestro.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : any;
  constructor(private service:  MyrestroService, 
    private toastr: ToastrService,
    
    private router : Router
    
    ) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe((res)=> {console.log(res)
       this.products = res
      this.toastr.success('Product List Fetched', 'Successfully!');
  })
  }

}

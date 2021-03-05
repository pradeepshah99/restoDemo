import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { MyrestroService } from '../myrestro.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productData : any;
  productObj: any;
  data : any;

  constructor(
    
    private service : MyrestroService,
    private toastr : ToastrService,
    private router : Router, private dataservice : DataService
  ) { }


  ngOnInit(): void {

    this.dataservice.currentData.subscribe(res=>{
      this.productData = res
      this.data = this.productData;
    })
  }

  updateProduct(){
    var productObj = {
      title : this.productData.title,
      description : this.productData.description,
      price: this.productData.price,
      company: this.productData.company,

    }
    this.service.putProduct(this.productData._id,productObj).subscribe(res=>{
      this.router.navigateByUrl('/products')
      this.toastr.success('Product Updated Successfully', 'Product Updated')
    })
  }

}

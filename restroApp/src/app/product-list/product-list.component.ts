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

  onDeleteProduct(id){
    console.log(id)
    if(window.confirm('Are you sure?') === true)
    {
      this.service.deleteProduct(id).subscribe((res)=>
    {
      this.service.getProduct().subscribe((res)=> {console.log(res)
        this.products = res
        this.toastr.success('Product Deleted', 'Successfully');
      })
      
    })
    }
    else {
      return;
    }
    
  
  
  }

  editProduct(productObject)
{
console.log(productObject)
  var productData = {
    _id : productObject._id,
    title : productObject.title,
    description : productObject.description,
    price: productObject.price,
    company : productObject.company


  }
  // this.service.changeData(productData)
  this.router.navigateByUrl('/editProduct/'+productData._id)
}

}

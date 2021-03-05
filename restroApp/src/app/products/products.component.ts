import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyrestroService } from '../myrestro.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  submitted = false;
  addproductForm = this.formBuilder.group({

    title : ['', Validators.required],
    description : ['', Validators.required],
    price: ['', Validators.required],
    company: ['', Validators.required]

  })

  constructor(private formBuilder:FormBuilder, private router: Router, private service : MyrestroService, private toastr : ToastrService) { }

  get title() {return this.addproductForm.get('title')}
  get description() {return this.addproductForm.get('description')}
  get price() {return this.addproductForm.get('price')}

  get company() {return this.addproductForm.get('company')}
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addproductForm, "test");
    this.submitted = true;

    if(this.addproductForm.invalid)
    {
      return;
    }
    else {

      this.service.addProduct({
     title: this.addproductForm.value.title,
     description: this.addproductForm.value.description,
     price: this.addproductForm.value.price,
     company: this.addproductForm.value.company


      }).subscribe((res)=>{})
      this.toastr.success('Added Product', 'Toastr fun!');
     this.router.navigateByUrl('/products');
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addproductForm.value))
  }

}

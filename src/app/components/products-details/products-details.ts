import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItem } from '../../models/productItem.model';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-products-details',
  imports: [DecimalPipe],
  templateUrl: './products-details.html',
  styleUrl: './products-details.css',
})
export class ProductsDetails {
  Math =Math
  productItem = signal(new ProductItem())
  productId:number=0;
  constructor(private productService:ProductService , private activeRoute: ActivatedRoute){
    this.productId= this.activeRoute.snapshot.params["productId"] 
    console.log(this.productId);
    this.productService.getProductById(this.productId).subscribe({
      next:(response:any)=>{
        this.productItem.set(response)
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

  addCart(name:string){
    window.alert("Item add successfully, Item name: "+name)
  }
}

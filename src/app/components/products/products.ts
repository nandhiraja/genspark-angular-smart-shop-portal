import { Component, signal } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [DecimalPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = signal<ProductModel[]>([]);
  protected Math =Math
  constructor(private ProductService: ProductService,private router: Router)
  {
      this.ProductService.getAllProducts().subscribe({
        next:(response:any)=>{
          this.products.set(response.products)
        }
      })
  }
  handleItemDetail(id:number){
    this.router.navigate(['product/'+id]);
  }

}

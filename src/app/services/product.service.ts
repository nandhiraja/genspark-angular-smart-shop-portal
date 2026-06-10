import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseUrl } from "../environment";

@Injectable({
    providedIn:"root"
})
export class ProductService{

    constructor(private http:HttpClient)
    {
    }

    public getAllProducts(){
       const url = baseUrl+"/products";
       return this.http.get(url);
    }

     public getProductById(id:number){
       const url = baseUrl+"/products/"+id;
       return this.http.get(url);
    }
}

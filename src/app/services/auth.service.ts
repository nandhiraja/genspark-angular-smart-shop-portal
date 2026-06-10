import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { baseUrl } from "../environment";


@Injectable({providedIn:"root"})

export class AuthService{
    constructor(private http:HttpClient)
    {

    }

    public loginApiCall(loginModel:LoginModel){
        const url =baseUrl+"/auth/login";
        return this.http.post(url,loginModel);
    }

     public getme(){
        const token = sessionStorage.getItem("accessToken");
        if(token){
            const header =  new HttpHeaders({
                'Authorization': 'Bearer '+token
                })

                const url =baseUrl+"/auth/me";
                return this.http.get<any>(url,{
                                    headers: header,
                                    withCredentials: true 
                                     });
        }
        console.log("Could not get user")
        return;
       
    }
}
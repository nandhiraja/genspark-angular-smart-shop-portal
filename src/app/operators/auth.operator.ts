import { BehaviorSubject, Subject } from "rxjs";

export const UserName = new BehaviorSubject<string|undefined>(undefined);
export const hasToken = !!sessionStorage.getItem("accessToken");
export const isLoggedIn = new BehaviorSubject<boolean>(hasToken);


export const updateUserLoggedInStatus = ()=>{
    const token = sessionStorage.getItem("accessToken");
    const Userstatus:boolean= token?true:false;
    isLoggedIn.next(Userstatus)
}
export const logout =()=>{
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    UserName.next(undefined);
    isLoggedIn.next(false)

}

export const UpdateUserName=()=>{
    const token = sessionStorage.getItem("accessToken");
     if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log("payload : ",payload);
        if(payload.username){
            UserName.next(payload.username);
        }
    
    }
}
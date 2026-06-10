import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map, take, tap } from "rxjs";
import { isLoggedIn } from "../operators/auth.operator";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

 
  return isLoggedIn.pipe(
    take(1), 
    map(resp => !!resp), 
    tap(isAuth => {
      if (!isAuth) {
        router.navigate(['']); 
        return false;
      }
      else return true;
    })
  );
};

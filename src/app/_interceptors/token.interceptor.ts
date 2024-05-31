import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Inject, Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../_models/user';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
   const accountService=Inject(AccountService);

   accountService.currentUser$.pipe(take(1)).subscribe({
    next:(user:User)=>{
      if(user){
        req=req.clone({
          setHeaders:{
            Authorization:`Bearer ${user.token}`
          }
        })
      }
    }
   })
   console.log(req)
  return next(req);
};

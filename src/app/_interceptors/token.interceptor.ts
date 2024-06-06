import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Inject, Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../_models/user';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
   
   let token = localStorage.getItem('access_token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

   console.log(req)
  return next(req);
};

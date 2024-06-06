import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Login } from '../../_models/login';
import { AccountService } from '../../_services/account.service';
import { CommonModule } from '@angular/common';
import { User } from '../../_models/user';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  
  login:Login=new Login;
  message:string='';
  isLoggedIn=false;
  userName='';
  constructor(private accountService:AccountService,private router:Router){}
 
  Login(){
    this.accountService.login(this.login).subscribe({
      next:response=>{
       this.navigateToDashboard(); 
       
      }
    })
  }
  
  navigateToDashboard(){
    this.accountService.currentUser$.subscribe({
      next:(res:any)=>{
        console.log(res)
        if(res.isSuccess)
          {
            this.router.navigateByUrl('/dashboard');
            this.isLoggedIn=true;
        
          }
        
      }
    })
  }
}

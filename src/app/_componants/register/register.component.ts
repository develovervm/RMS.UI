import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../_models/user';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User=new User;

  constructor(private account:AccountService){}

  Register(){
    console.log(this.user);
    this.account.register(this.user).subscribe({
      next:(response)=>{
        console.log(response);
        alert('User Registered Successfully')
      },
      error:(err)=>console.log(err)
    })
  }
  
}

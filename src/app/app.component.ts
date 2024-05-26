import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './_componants/header/header.component';
import { HomeComponent } from './_componants/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RMS.UI';
}

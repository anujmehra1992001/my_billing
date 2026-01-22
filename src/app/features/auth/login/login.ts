import { Component } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "../../../services/auth";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  imports:[CommonModule,FormsModule,],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
  

})
export class LoginComponent {
  email = 'anujmehra@gmail.com';
  password = '4321';

  constructor(
    private auth: AuthService,
    private http: HttpClient,
     private router: Router 
  ) {}

  
login() {
  this.auth.login({
  email: this.email,
  password: this.password
}).subscribe({
  next: (res: any) => {
    this.auth.saveToken(res.token);
   this.router.navigate(['/dashboard/home']);

    alert('Login successful');
  },
  error: () => {
    alert('Invalid login');
  }
});


}


  getProducts() {
    this.http.get('http://localhost:3000/api/products').subscribe({
      next: res => console.log(' Products:', res),
      error: err => {
        if (err.error?.errorType === 'TOKEN_EXPIRED') {
          alert('Session expired. Login again.');

          this.auth.logout();
        }
      }
    });
  }


}



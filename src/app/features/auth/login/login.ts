import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  standalone: true,
  template: `
    <div class="login-box">
      <h2>Billing App Login</h2>

      <input placeholder="Username" /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />

      <button (click)="login()">Login</button>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      height: 100vh;
      background: linear-gradient(135deg, #667eea, #764ba2);
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', sans-serif;
    }

    .login-box {
      width: 360px;
      padding: 32px;
      background: white;
      border-radius: 14px;
      box-shadow: 0 25px 60px rgba(0,0,0,.25);
      animation: slideUp .6s ease;
    }

    @keyframes slideUp {
      from { transform: translateY(40px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .login-box h2 {
      text-align: center;
      margin-bottom: 24px;
      color: #333;
    }

    .login-box input {
      width: 100%;
      padding: 12px;
      margin-bottom: 16px;
      border-radius: 8px;
      border: 1px solid #ddd;
      transition: .3s;
    }

    .login-box input:focus {
      border-color: #667eea;
      outline: none;
    }

    .login-box button {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 8px;
      background: #667eea;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: .3s;
    }

    .login-box button:hover {
      background: #556cd6;
    }
  `]
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}

// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   standalone: true,
//   selector: 'app-topbar',
//   templateUrl: './topbar.html',
//   styleUrls: ['./topbar.css'],
//   imports: [CommonModule]
// })
// export class TopbarComponent {
  // @Input() loggedInUser: any; 
  //  users: any[] = [];        // 
  // loading = false;          // 
  // errorMessage = '';        // 

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.getUsers();
  // }

  // getUsers() {
  //   this.loading = true;     
  //   this.errorMessage = '';

  //   this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
  //     .subscribe({
  //       next: (res) => {
  //         this.users = res;  
  //         this.loading = false;
  //       },
  //       error: () => {
  //         this.errorMessage = 'Something went wrong';
  //         this.loading = false;
  //       }
  //     });
  // }



import { Component, OnInit } from '@angular/core';

import { startWith, filter, tap } from 'rxjs/operators';
import { BookService } from '../../../../../books';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [ CommonModule, FormsModule ,ReactiveFormsModule], 
  templateUrl: './notifications.html',
})
export class notifications implements OnInit {

   bookForm!: FormGroup;
  books: any[] = [];

  loading = false;
  apiError = '';
  successMsg = '';

  constructor(
    private fb: FormBuilder,
    private booksService: BookService
  ) {}
ngOnInit() {
  this.bookForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required]
  });

  // 🔥 AUTO ERROR LOGIC
  this.bookForm.get('price')?.valueChanges.subscribe(value => {
    if (value > 5000) {
      this.bookForm.get('price')?.setErrors({ maxPrice: true });
    }
  });
}

  onSubmit() {
    debugger; // 👈 VS Code / Chrome debugger

    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.apiError = '';
    this.successMsg = '';

    const payload = {
      id: Date.now(),
      ...this.bookForm.getRawValue()
    };

    this.booksService.addBook(payload).subscribe({
      next: () => {
        this.books = [...this.books, payload];
        this.successMsg = 'Book added successfully';
        this.bookForm.reset();
        this.loading = false;
      },
      error: (err: { error: { message: string; }; }) => {
        this.apiError = err.error?.message || 'Server error';
        this.loading = false;
      }
    });
  }
}

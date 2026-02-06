import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookService {

  // 🔹 Mock DB
  private books = [
    { id: 1, name: 'Angular Basics', price: 299 },
    { id: 2, name: 'RxJS Deep Dive', price: 399 }
  ];

  getBooks(): Observable<any[]> {
    return of(this.books).pipe(delay(500));
  }

  addBook(book: any): Observable<any> {

    // ❌ Simulate server error
    if (book.name.toLowerCase().includes('error')) {
      return throwError(() => ({
        error: { message: 'Book name not allowed' }
      }));
    }

    return of(book).pipe(delay(800));
  }
}

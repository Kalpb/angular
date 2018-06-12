import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';



@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('https://jsonplaceholder.typicode.com/users').pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');

  }
  getEmployees() {
    return [
      {'id': 1, 'name': 'Matt', 'age': 30},
      {'id': 2, 'name': 'Jay', 'age': 27},
      {'id': 3, 'name': 'Scott', 'age': 38},
      {'id': 4, 'name': 'Luis', 'age': 15},
      {'id': 5, 'name': 'Theo', 'age': 8},
    ];
  }

}

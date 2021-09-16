import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url="https://11jsonplaceholder.typicode.com/todos";


  constructor(private http:HttpClient) { }

  getTodo(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    )
  }

  createTodo(data){
    return this.http.post(this.url,data)

  }
  handleError(error:HttpErrorResponse){
    alert(error.message)
    return throwError('Error in http service')

  }
}

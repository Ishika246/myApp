import { Injectable } from '@angular/core';
import { IBook } from '../book/book';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { rendererTypeName } from '@angular/compiler';
//import {catchError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string='./assets/api/books/books.json';
  constructor(private httpClient :HttpClient) { }
  
  getAllBooks():Observable<IBook[]>{
    return this.httpClient.get <IBook[]>(this.url)
    //.pipe( retry(2),
     // catchError(this.handleError)
     
    
  }
 /* handleError(error:HttpErrorResponse){
    console.log(error.message)
    return throwError(errorMessage)

  }*/
}

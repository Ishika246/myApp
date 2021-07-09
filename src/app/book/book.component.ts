import { Component, OnInit } from '@angular/core';
import {IBook} from './book'
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

    title:string="Book Management"
    imgWidth:number=50;
    imgHeight:number=50;
     errorMessage:any;
    showImage:boolean=false;
 books:IBook[]=[];
 constructor(private _bookService:BookService) {
     

 }
 ngOnInit():void{
     this._bookService.getAllBooks()
     .subscribe((data)=>this.books=data),
     //(error){}=>{},
     ()=>{console.log('Done')}
 }
toggleImage():void{
    this.showImage=!this.showImage;

}
}
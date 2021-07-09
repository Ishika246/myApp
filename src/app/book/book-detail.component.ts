import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
pageTitle:string="Book Details"
book:IBook={
  "bookID": 1,
  "title": "Goodnight Moon",
  "code":"G123-N00",
  "author": "Margaret Wise Brown",
  "price":45.67,		
  "publicationDate": "March 20, 1953",
  "starRating":4.5,
  "imageUrl":"assets/images/book1.png"
}
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.pageTitle+=this.activatedRoute.snapshot.params['id'];
  }
goBack():void{
  this.router.navigate(['/books'])
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/books.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  Heading="Details of Books";
  books;
  favs;
  getDetails(){
    return this.Heading;
  }
  
  constructor(bookservice:BooksService,private router:Router) { 
    this.books=bookservice.getbooks();
    this.favs=bookservice.getfavs();
  }




viewtab="list";
isButton=true;
isPrimary=true;
canSubmit=true;
togglefn(){
  this.isPrimary=!this.isPrimary
}

todofn(){
  this.router.navigateByUrl('todo')
}
  ngOnInit() {
  }

}

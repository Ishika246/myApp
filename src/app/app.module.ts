import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BookComponent } from './book/book.component';
import { TestPipe } from './pipes/test.pipe';
import { BookDetailComponent } from './book/book-detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TestPipe,
    BookDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'books',component:BookComponent},
      {path:'books/:id',component:BookDetailComponent},
      {path:'home',component:HomeComponent},
      {path:'**',redirectTo:'home'}
     
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,BookComponent]
})
export class AppModule { }

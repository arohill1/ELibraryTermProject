import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';
import {BookModelServer, ServerResponse} from '../../models/book.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllProducts().subscribe((prods: ServerResponse) => {
    this.books = prods.books;
    console.log(this.books);
    });
  }
  selectBook(id: number){
    this.router.navigate(['/books', id]).then();
  }
  AddToCart(id: number)  {
   this.cartService.AddProductToCart(id);
  }

}

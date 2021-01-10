import { Component, OnInit } from '@angular/core';
import {CartModelServer} from '../../models/cart.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartTotal: number;
  cartData: CartModelServer;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
      this.cartService.cartTotal$.subscribe(total => this.cartTotal = total );

      this.cartService.cartDataObs$.subscribe(data => this.cartData = data);

      console.log(this.cartData);
  }

}

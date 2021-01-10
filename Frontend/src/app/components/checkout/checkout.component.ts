import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {CartModelServer} from '../../models/cart.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartTotal: number;
  cartData: CartModelServer;

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
   this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  onCheckout(){
    this.spinner.show();
    this.cartService.CheckoutFromCart(1);
  }
}

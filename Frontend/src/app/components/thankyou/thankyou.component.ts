import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  message: string;
  orderId: number;
  books: any[] = [];
  cartTotal: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}

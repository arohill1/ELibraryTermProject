import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    books: any[] = [];
    private serverUrl = environment.serverURL;

  constructor( private http: HttpClient) { }

  getSingleOrder = (orderId: number) => this.http.get<BookResponseModel>(this.serverUrl + '/orders/' + orderId).toPromise();

}

interface BookResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}

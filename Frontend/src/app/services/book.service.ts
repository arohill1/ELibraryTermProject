import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {BookModelServer, ServerResponse} from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private serverURL = environment.serverURL;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:align
  // @ts-ignore
  // tslint:disable-next-line:typedef no-shadowed-variable
  getAllProducts(limitOfResults= 10): Observable<ServerResponse> {
    // @ts-ignore
    return this.http.get<ServerResponse>(this.serverURL + '/books', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }


  getSingleProduct(id: number): Observable<BookModelServer> {
    return this.http.get<BookModelServer>(this.serverURL + '/books/' + id);

}


/* Get single product */
/*
getSingleProduct(id: number); : Observable < BookModelServer > {
  return this.http.get<BookModelServer>(this.SERVER_URL + '/book/' + id);
};  */
  getProductsFromCategory(catName: string): Observable<BookModelServer[]> {
  // @ts-ignore
    return this.http.get<BookModelServer>(this.serverURL + '/books/category/' + catName);

}

/* Get products from one category */
/*
getProductsFromCategory(catName: string); : Observable < BookModelServer[] > {
       return this.http.get<BookModelServer>(this.SERVER_URL + '/book/category/' + catName);
    };
*/
}


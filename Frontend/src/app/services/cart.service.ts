import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookService} from './book.service';
import {OrderService} from './order.service';
import {CartModelPublic, CartModelServer} from '../models/cart.model';
import {BehaviorSubject} from 'rxjs';
import {NavigationExtras, Router} from '@angular/router';
import {BookModelServer} from '../models/book.model';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private serverUrl = environment.serverURL;
  // data variable to store the cart information on the client's local storage
  private CartDataClient: CartModelPublic = {
    total: 0,
    prodData: [{
      incart: 0,
      id: 0
    }]
  };

  // data variable to store cart information on the server
  private cartDataServer: CartModelServer = {
    total: 0,
    data: [{
      numInCart: 0,
      book: undefined
    }]

  };
  /* Observables for the components to subscribe */
  cartTotal$ = new BehaviorSubject<number>(0);
  cartDataObs$ = new BehaviorSubject<CartModelServer>(this.cartDataServer);


  constructor(private httpClient: HttpClient,
              private bookService: BookService,
              private orderService: OrderService,
              private router: Router,
              private toast: ToastrService,
              private spinner: NgxSpinnerService) {
    this.cartTotal$.next(this.cartDataServer.total);
    this.cartDataObs$.next(this.cartDataServer);

    // Get the information from local storage if any
    const info: CartModelPublic = JSON.parse(localStorage.getItem('cart'));
    // Check if the info variable is null or has some data it

    if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
      this.CartDataClient = info;
      // Loop through each entry and put it in the cartDataService object
      this.CartDataClient.prodData.forEach(b => {
        this.bookService.getSingleProduct(b.id).subscribe((actualProdInfo: BookModelServer) => {
          if (this.cartDataServer.data[0].numInCart === 0) {
            this.cartDataServer.data[0].numInCart = b.incart;
            this.cartDataServer.data[0].book = actualProdInfo;
            this.CalculateTotal();
            this.CartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
          } else {
            // CartDataServer already has some entry in it
            this.cartDataServer.data.push({
              numInCart: b.incart,
              book: actualProdInfo
            });

            this.CalculateTotal();
            this.CartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
          }
          this.cartDataObs$.next({...this.cartDataServer});


        });
      });
    }
  }

  CalculateSubTotal(index): number {
    let subTotal = 0;

    const p = this.cartDataServer.data[index];
    subTotal = p.book.price * p.numInCart;

    return subTotal;
  }

  AddProductToCart(id: number, quantity?: number) {
    this.bookService.getSingleProduct(id).subscribe(prod => {
      // 1. If the cart is empty
      if (this.cartDataServer.data[0].book === undefined) {
        this.cartDataServer.data[0].book = prod;
        this.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;
        this.CalculateTotal();
        this.CartDataClient.prodData[0].incart = this.cartDataServer.data[0].numInCart;
        this.CartDataClient.prodData[0].id = prod.id;
        this.CartDataClient.total = this.cartDataServer.total;
        localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
        this.cartDataObs$.next({...this.cartDataServer});
        this.toast.success(`${prod.name} added to the cart.`, 'Product Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }  // END of IF
      // Cart is not empty
      else {
        const index = this.cartDataServer.data.findIndex(b => b.book.id === prod.id);
        // a. If that item is already in the cart
        if (index !== -1) {

          if (quantity !== undefined && quantity <= prod.quantity) {
            this.cartDataServer.data[index].numInCart = this.cartDataServer.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
          } else {
            this.cartDataServer.data[index].numInCart < prod.quantity ? this.cartDataServer.data[index].numInCart++ : prod.quantity;
          }

          this.CartDataClient.prodData[index].incart = this.cartDataServer.data[index].numInCart;
          this.CalculateTotal();
          this.CartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
          this.toast.info(`${prod.name} quantity updated in the cart.`, 'Product Updated', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });

        }

        // b. if the item is not the cart
        else {
          this.cartDataServer.data.push({
            book: prod,
            numInCart: 1
          });
          this.CartDataClient.prodData.push({
            incart: 1,
            id: prod.id
          });
          localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
          this.toast.success(`${prod.name} added to the cart.`, 'Product Added', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.CalculateTotal();
          this.CartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
          this.cartDataObs$.next({...this.cartDataServer});
        } // end of else
      }
    });

  }

  UpdateCartItems = (index, increase: boolean) => {
    const data = this.cartDataServer.data[index];
    if (increase) {
      data.numInCart < data.book.quantity ? data.numInCart++ : data.book.quantity;
      this.CartDataClient.prodData[index].incart = data.numInCart;
      this.CalculateTotal();
      this.CartDataClient.total = this.cartDataServer.total;
      localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
      this.cartDataObs$.next({...this.cartDataServer});
    } else {
      data.numInCart--;
      if (data.numInCart < 1) {
        this.DeleteProductFromCart(index);
        this.cartDataObs$.next({...this.cartDataServer});
      } else {
        this.cartDataObs$.next({...this.cartDataServer});
        this.CartDataClient.prodData[index].incart = data.numInCart;
        this.CalculateTotal();
        this.CartDataClient.total = this.cartDataServer.total;
        localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
      }

    }

  };

  DeleteProductFromCart(index) {
    if (window.confirm('Are you sure you want to delete the item?')) {
      this.cartDataServer.data.splice(index, 1);
      this.CartDataClient.prodData.splice(index, 1);
      // To calculate total amount
      // this.CalculateTotal();
      this.CartDataClient.total = this.cartDataServer.total;
      if (this.CartDataClient.total === 0) {
        this.CartDataClient = {prodData: [{incart: 0, id: 0}], total: 0};
        localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
      } else {
        localStorage.setItem('cart', JSON.stringify(this.CartDataClient));
      }

      if (this.cartDataServer.total === 0) {
        this.cartDataServer = {
          data: [{
            book: undefined,
            numInCart: 0
          }],
          total: 0
        };
        this.cartDataObs$.next({...this.cartDataServer});
      } else {
        this.cartDataObs$.next({...this.cartDataServer});
      }
    }
    // If the user doesn't want to delete the product, hits the CANCEL button
    else {
      return;
    }

  }

  CheckoutFromCart = (userId: number) => {
    this.httpClient.post(this.serverUrl + '/orders/payment', null).subscribe((res: { success: boolean }) => {
      if (res.success) {
        this.spinner.hide();
        this.resetServerData();
        this.router.navigate(['/thankyou']);
      } else {
        this.spinner.hide();
        this.router.navigateByUrl('/checkout').then();
        this.toast.error(`Sorry, failed to book the order`, 'Order Status', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }
    });
  };

  private CalculateTotal() {
    let Total = 0;

    this.cartDataServer.data.forEach(b => {
      const {numInCart} = b;
      const {price} = b.book;
      Total += numInCart * price;
    });
    this.cartDataServer.total = Total;
    this.cartTotal$.next(this.cartDataServer.total);

  }

  private resetServerData() {
    this.cartDataServer = {
      data: [{
        book: undefined,
        numInCart: 0
      }],
      total: 0
    };
    this.cartDataObs$.next({...this.cartDataServer});

  }
}


interface OrderResponse {
  order_id: number;
  success: boolean;
  message: string;
  books: [{
    id: string,
    numInCart: string
  }];
}

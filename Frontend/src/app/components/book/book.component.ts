import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../services/book.service';
import {CartService} from '../../services/cart.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';


declare let $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, AfterViewInit {
  id: number;
  book;
  thumbImages: any[] = [];

  @ViewChild('quantity') quantityInput;

  constructor(private bookService: BookService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.bookService.getSingleProduct(this.id).subscribe(prod => {
        this.book = prod;
        if (prod.images !== null) {
          this.thumbImages = prod.images.split(';');
        }

      });
    });
  }

  ngAfterViewInit(): void {
    $('#product-main-img').slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: '#product-imgs',
    });

    // Product imgs Slick
    $('#product-imgs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: '#product-main-img',
      responsive: [{
        breakpoint: 991,
        settings: {
          vertical: false,
          arrows: false,
          dots: true,
        }
      },
      ]
    });

    // Product img zoom
    const zoomMainProduct = document.getElementById('product-main-img');
    if (zoomMainProduct) {
      $('#product-main-img .product-preview').zoom();
    }
  }
  // tslint:disable-next-line:typedef
  addToCart(id: number) {
    this.cartService.AddProductToCart(id, this.quantityInput.nativeElement.value);
  }

  // tslint:disable-next-line:typedef
  Increase() {
    // tslint:disable-next-line:radix
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.book.quantity >= 1){
      value++;

      if (value > this.book.quantity) {
        // @ts-ignore
        value = this.product.quantity;
      }
    } else {
      return;
    }

    this.quantityInput.nativeElement.value = value.toString();
  }

  // tslint:disable-next-line:typedef
  Decrease() {
    // tslint:disable-next-line:radix
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.book.quantity > 0){
      value--;

      if (value <= 0) {
        // @ts-ignore
        value = 0;
      }
    } else {
      return;
    }
    this.quantityInput.nativeElement.value = value.toString();
  }
}

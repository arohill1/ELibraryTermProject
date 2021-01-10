import {BookModelServer} from './book.model';

export interface CartModelServer{
    total: number;
    data: [{
      book: BookModelServer,
      numInCart: number
  }];
}

export interface CartModelPublic{
  total: number;
  prodData: [
    {
      id: number,
      incart: number
    }
  ];
}

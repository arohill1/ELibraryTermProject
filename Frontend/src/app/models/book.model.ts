export interface BookModelServer{
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  images: string;
}

export interface ServerResponse{
  count: number;
  books: BookModelServer[];
}

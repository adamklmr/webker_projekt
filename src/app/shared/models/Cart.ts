export interface Cart {
    id: number;
    name: string;
    category: string;
    instock: boolean;
    price: number;
    pic: string;
    description?: string;
    quantity: number;

  }
  export const CartObjeckt = [
    {
      'id': 1,
      'name': 'Orsó',
      'category': 'Orsók',
      'instock': true,
      'price': 12000,
      'pic': '../../../assets/images/products/orso.jpg',
      'description': 'Nagyon menő orso termék, ami mindenki kedvence!'
    },
    {
      'id': 2,
      'name': 'Ruhadarab',
      'category': 'Ruházat',
      'instock': true,
      'price': 8000,
      'pic': '../../../assets/images/products/ruha.jpg',
      'description': 'Egy nagyon szép ruhadarab, ami mindenki kedvence!'
    }
  ];
export interface Cart {
    id: number;
    name: string;
    category: string;
    instock: boolean;
    price: number;
    pic: string;
    quantity: number;
  }
    export const CartObject = [
        {
        'id': 1,
        'name': 'Orsó',
        'category': 'Orsók',
        'instock': true,
        'price': 12000,
        'pic': '../../../assets/images/products/orso.jpg',
        'quantity': 1
        },
        {
        'id': 2,
        'name': 'Ruhadarab',
        'category': 'Ruházat',
        'instock': true,
        'price': 8000,
        'pic': '../../../assets/images/products/ruha.jpg',
        'quantity': 2
        }
    ];


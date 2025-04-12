export interface Product {
    id: number;
    name: string;
    category: string;
    instock: boolean;
    price: number;
    pic: string;
    description?: string;
  }
  export const ProductObject = [
    {
      'id': 1,
      'name': 'Orsó',
      'category': 'Felszerelés',
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
    ,
    {
      'id': 3,
      'name': 'Horgászbot',
      'category': 'Felszerelés',
      'instock': true,
      'price': 21890,
      'pic': '../../../assets/images/products/horgaszbot_1.png',
      'description': 'Prologic C-SERIES SPOD MARKER AB 12ft 5LBS 50MM'
    }
  ];
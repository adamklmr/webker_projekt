export interface Product {
    id: number;
    name: string;
    category: 'Botok' | 'Orsók' | 'Szerelékek' | 'Ruházat';
    instock: boolean;
    price: number;
    pic: string;
    description?: string;
  }
  export const ProductObject = [
    {
        'id': 1,
        'name': 'Orso',
        'category': 'Orsók',
        'instock': true,
        'price': 12000,
        'pic': '',
        'description': 'Nagyon menő orso termék, ami mindenki kedvence!'
    },
    {
        'id': 2,
        'name': 'Ruhadarab',
        'category': 'Ruházat',
        'instock': true,
        'price': 8000,
        'pic': '',
        'description': 'Egy nagyon szép ruhadarab, ami mindenki kedvence!'
    }
];
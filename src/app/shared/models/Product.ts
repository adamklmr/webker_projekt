export interface Product {
    id: number;
    name: string;
    category: 'Botok' | 'Orsók' | 'Szerelékek' | 'Ruházat';
    instock: boolean;
    price: number;
    pic: string;
    description?: string;
  }
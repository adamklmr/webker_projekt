export interface Product {
    id: number;
    name: string;
    category: 'Botok' | 'Orsók' | 'Szerelékek' | 'Ruházat';
    price: number;
    pic: string;
    description?: string;
  }
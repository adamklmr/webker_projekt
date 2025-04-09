import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatCardTitleGroup } from '@angular/material/card';
import { Product, ProductObject } from '../../shared/models/Product';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  ProductObject = ProductObject; // A termékek tömbje
  ProductsdisplayedColumns = ['pic', 'name', 'category', 'description','quantity','actions','price']; // Az oszlopok, amiket meg akarunk jeleníteni a táblázatban

  products: Product[] = ProductObject;

  ngOnInit(): void {
    
  }
  removeFromCart(index: number): void {
    // Ellenőrizzük, hogy az index érvényes-e
    if (index >= 0 && index < this.products.length) {
      this.ProductObject.splice(index,1); // Eltávolítjuk a terméket a tömbből 
      this.products = [...this.ProductObject]; // Frissítjük a termékek tömbjét
      console.log("Termék eltávolítva:", index); // Ellenőrzéshez
    } else {
      console.error("Érvénytelen index:", index);
    }
  }

  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + (product.price), 0);
  }
  checkout(): void {
    if (this.products.length === 0) {
      console.warn("A kosár üres, nem lehet fizetni.");
      return;
    }

    const totalPrice = this.getTotalPrice();
    console.log(`Fizetés sikeres! Végösszeg: ${totalPrice} Ft`);
    this.ProductObject = []; // Kiürítjük a kosarat
    this.products = []; // Frissítjük a termékek tömbjét
  }

  
}

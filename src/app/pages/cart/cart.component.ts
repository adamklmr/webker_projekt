import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatCardTitleGroup } from '@angular/material/card';
import { Product, ProductObject } from '../../shared/models/Product';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CurrencyPipePipe } from '../../shared/pipes/currency.pipe.pipe';
import { CouponObject } from '../../shared/models/Coupon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    CurrencyPipePipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  ProductObject = ProductObject; // A termékek tömbje
  ProductsdisplayedColumns = ['pic', 'name', 'category', 'description','quantity','price','actions']; // Az oszlopok, amiket meg akarunk jeleníteni a táblázatban

  couponCode: string = '';
  totalPrice: number = 10000; // Példa alapár
  discount: number = 0;
  discountedPrice: number = this.totalPrice;

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
  // checkout(): void {
  //   if (this.products.length === 0) {
  //     console.warn("A kosár üres, nem lehet fizetni.");
  //     return;
  //   }
  //   const totalPrice = this.getTotalPrice();
  //   console.log(`Fizetés sikeres! Végösszeg: ${totalPrice} Ft`);
  //   this.ProductObject = []; // Kiürítjük a kosarat
  //   this.products = []; // Frissítjük a termékek tömbjét
  // }

  applyCoupon(): void {
    const foundCoupon = CouponObject.find(coupon => 
      coupon.name.toLowerCase() === this.couponCode.toLowerCase()
    );

    if (foundCoupon) {
      this.discount = foundCoupon.value;
      this.discountedPrice = this.totalPrice - (this.totalPrice * this.discount) / 100;
      alert(`Sikeresen alkalmaztad a ${this.discount}% kedvezményt!`);
    } else {
      alert('Érvénytelen kuponkód.');
      this.discount = 0;
      this.discountedPrice = this.totalPrice;
    }
  }
  checkout(): void {
    if (this.products.length === 0) {
          alert("A kosár üres, nem lehet fizetni.");
          return;
        }
        const totalPrice = this.getTotalPrice();
        this.ProductObject = []; // Kiürítjük a kosarat
        this.products = []; // Frissítjük a termékek tömbjét
        alert(`Fizetendő összeg: ${this.discountedPrice} HUF`);

  }
 

  
}

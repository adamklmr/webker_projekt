import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Product, ProductObject } from '../../shared/models/Product';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule,
    MatButtonModule            
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  ProductObject = ProductObject; // A termékek tömbje
  selectedIndex: number = 0; // Alapértelmezésben az első termék indexe

  ngOnInit(): void {
    
  }

  reload(index: number): void {
    // Ellenőrizzük, hogy az index érvényes-e
    if (index >= 0 && index < this.ProductObject.length) {
      this.selectedIndex = index; // Beállítjuk az új kiválasztott indexet
      console.log("Új selectedIndex:", index); // Ellenőrzéshez
    } else {
      console.error("Érvénytelen index:", index);
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit(): void {
    // Initialization logic here
  }

  // Add any additional methods or properties as needed

}

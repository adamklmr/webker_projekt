import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatCardTitleGroup } from '@angular/material/card';
import { Product, ProductObject } from '../../shared/models/Product';
import { MatButtonModule } from '@angular/material/button';
import { EventObject } from '../../shared/models/Event';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ProductObject = ProductObject;
  EventObject = EventObject; // Az események tömbje

}

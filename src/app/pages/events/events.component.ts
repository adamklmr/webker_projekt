import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule,MatCardTitleGroup } from '@angular/material/card';
import { EventObject } from '../../shared/models/Event';



@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  EventObject = EventObject; // Az események tömbje
  selectedIndex: number = 0;

  ngOnInit(): void {

  }

reload(index: number): void {
    // Ellenőrizzük, hogy az index érvényes-e
    if (index >= 0 && index < this.EventObject.length) {
      this.selectedIndex = index; // Beállítjuk az új kiválasztott indexet
      console.log("Új selectedIndex:", index); // Ellenőrzéshez
    } else {
      console.error("Érvénytelen index:", index);
    }
  }
}

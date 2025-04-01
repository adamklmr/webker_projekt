import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EsemenyekComponent } from './pages/esemenyek/esemenyek.component';
import { TermekekComponent } from './pages/termekek/termekek.component';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    RouterLink,
    MenuComponent,
    EsemenyekComponent,
    TermekekComponent,
    MatToolbar
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
onSearch(arg0: string) {
throw new Error('Method not implemented.');
}
  title = 'Horgászbolt';

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}

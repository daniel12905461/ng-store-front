import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaModule } from './prueba/prueba.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    PruebaModule,
    CoreModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-store-front';
}

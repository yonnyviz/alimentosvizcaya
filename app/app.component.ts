import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Links = [
    {src:'#productos', name: 'Productos'},
    {src:'#sobre-nosotros', name: 'Sobre Alimentos Vizcaya'},
    {src:'#recetas', name: 'Recetas'}
  ];
  constructor() {
    this.Links
  }
}
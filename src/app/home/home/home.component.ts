import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: { name: string, color: string }[];
  height: string;

  @ViewChildren('productsElement') productsElement: QueryList<ElementRef>;


  constructor(
    private renderer2: Renderer2,
  ) { }


  ngOnInit(): void {
    this.products = [
      { name: 'project 1', color: 'bg-first' },
      { name: 'project 2', color: 'bg-second' },
      { name: 'project 3', color: 'bg-third' },
    ];
    this.height = 100 / this.products.length + '%';
  }
}

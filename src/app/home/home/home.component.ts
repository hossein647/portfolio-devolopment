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
      { name: 'project 1', color: 'bg-red-500' },
      { name: 'project 2', color: 'bg-black' },
      { name: 'project 3', color: 'bg-purple-500' },
    ];
    this.height = 100 / this.products.length + '%';
  }
}

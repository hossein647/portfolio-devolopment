import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: { title: string, color: string, icons: string[] }[];
  height: string;

  @ViewChildren('productsElement') productsElement: QueryList<ElementRef>;


  constructor(
    private renderer2: Renderer2,
  ) { }


  ngOnInit(): void {
    this.initData();
    this.height = 100 / this.products.length + '%';
  }


  initData() {
    this.products = [
      {
        title: 'سفارش غذا',
        color: 'bg-first',
        icons: [
          'bg-github-img',
          'bg-magnifying-img',
          'bg-information-img'
        ]
      },
      {
        title: 'ادمین پنل (تجاری)',
        color: 'bg-second',
        icons: [
          'bg-github-img',
          'bg-magnifying-img',
          'bg-information-img'
        ]
      },
      {
        title: 'بلاگ برنامه نویسی',
        color: 'bg-third',
        icons: [
          'bg-github-img',
          'bg-magnifying-img',
          'bg-information-img'
        ]
      },
    ];
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_interfaces/prodoct.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: Product[];
  height: string;
  showDetailsProduct = false;
  @Output() onShowDetails = new EventEmitter<{ index: number, product: HTMLDivElement}>()

  ngOnInit(): void {
    this.initData();
    this.height = 100 / this.products.length + '%';
  }


  showDetails(index: number, product: HTMLDivElement) {
    this.showDetailsProduct = true;
    this.onShowDetails.emit({ index, product })
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

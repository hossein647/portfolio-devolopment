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
  @Output() onShowDetails = new EventEmitter<{ index: number, product: Product}>()

  ngOnInit(): void {
    this.initData();
    this.height = 100 / this.products.length + '%';
  }


  showDetails(index: number, product: Product) {
    this.showDetailsProduct = true;
    this.onShowDetails.emit({ index, product })
  }

  initData() {
    this.products = [
      {
        title: 'سفارش غذا',
        color: 'bg-first',
        years:'1400-1401',
        feature: [
          'سیستم رزرو و نمایش غذای ویژه هر رستوران در صفحه اول',
          'ادمین پنل مخصوص مدیران رستوران',
          'ادمین پنل مخصوص مشتریان',
          'ادمین پنل مخصوص مدیریت سایت',
          'سیستم آپلود تصاویر',
          'سیستم ایجاد دسته بندی دلخواه مخصوص هر رستوران',
        ],
        technology: {
          front: [
            'Angular',
            'RxJs',
            'Akita StateManagment',
            'Angular Material',
            'Tailwind css'
          ],
          back: [
            'NestJs Framework',
            'Mongodb Database',
          ]
        }
      },
      {
        title: 'ادمین پنل (تجاری)',
        color: 'bg-second',
        years:'',
        feature: [],
        technology: {
          front: [

          ],
          back: []
        }
      },
      {
        title: 'بلاگ برنامه نویسی',
        color: 'bg-third',
        years:'',
        feature: [],
        technology: {
          front: [

          ],
          back: []
        }
      },
    ];
  }
}

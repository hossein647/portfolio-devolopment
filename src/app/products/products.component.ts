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
  @Output() onShowDetails = new EventEmitter<Product>()

  ngOnInit(): void {
    this.initData();
    this.height = 100 / this.products.length + '%';
  }


  showDetails(product: Product) {
    this.showDetailsProduct = true;
    this.onShowDetails.emit(product);
  }

  initData() {
    this.products = [
      {
        title: 'سفارش غذا',
        color: 'bg-first',
        years:'1400-1401',
        src: './../../assets/img/order-food.png',
        feature: [
          'سیستم رزرو و نمایش غذای ویژه هر رستوران در صفحه اول',
          'ادمین پنل مخصوص مدیران رستوران',
          'ادمین پنل مخصوص مشتریان',
          'ادمین پنل مخصوص مدیریت سایت',
          'سیستم آپلود تصاویر',
          'سیستم ایجاد دسته بندی دلخواه مخصوص انواع رستوران',
        ],
        technology: {
          front: [
            'Angular',
            'RxJs',
            'Akita State Managment',
            'Angular Material',
            'Tailwind css'
          ],
          back: [
            'NestJs Framework',
            'Mongodb Database'
          ]
        }
      },
      {
        title: 'ادمین پنل (مشتری)',
        color: 'bg-second',
        years:'1401',
        src: './../../assets/img/admin-panel.png',
        feature: [
          'کار با api آمازون (AWS S3) بر بستر سرویس لیارا',
          'سیستم آپلود و دانلود فایل',
          'سیستم احراز هویت کاربران با SMS',
          'سیستم اتصال و پرداخت درگاه بانکی'
        ],
        technology: {
          front: [
            'Angular',
            'RxJs',
            'Prime Ng'
          ],
          back: [
            'NestJs Framwork',
            'Mongodb Database'
          ]
        }
      },
      {
        title: 'بلاگ برنامه نویسی',
        color: 'bg-third',
        years:'1402',
        src: './../../assets/img/olivier-guillard-FKJgBUDoVC0-unsplash.jpg',
        feature: [],
        technology: {
          front: [
            'Angular',
            'Tailwind'
          ],
          back: []
        }
      },
    ];
  }
}

import { Component, HostListener} from '@angular/core';
import { Product } from '../_interfaces/prodoct.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showDetailsProduct = false;
  product: Product;
  scrollHeight: number;
  showArrowDown = true;
  
  constructor() { }


  ngOnInit(): void {
    this.scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight
  }


  onShowDetails(product: Product) {
    this.product = product;
    this.showDetailsProduct = true;
  }
  

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    const scrollToTop = window.pageXOffset > 350 || window.scrollY > 35;
    if (scrollToTop) this.showArrowDown = false;
    else this.showArrowDown = true;
  }


  gotToPositonScroll() {
    this.showArrowDown = !this.showArrowDown;
  }
}

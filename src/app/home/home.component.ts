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
    document.body.style.overflowY = 'hidden';
  }
  

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    const scrollToTop = window.pageXOffset > 350 || window.scrollY > 35;
    if (scrollToTop) this.showArrowDown = false;
    else this.showArrowDown = true;
  }


  gotToPositonScroll() {
    if (this.showArrowDown) window.scrollTo(0, this.scrollHeight);
    else window.scrollTo(0, 0);
  }
}

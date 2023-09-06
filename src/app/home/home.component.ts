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
  showArrowBottom: boolean;
  
  constructor() { }


  ngOnInit(): void {
    console.log(document.documentElement.scrollTop);
    console.log(window.pageYOffset, window.screenY, document.body.scrollHeight, document.documentElement.scrollHeight);
    this.scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight
    if (window.pageXOffset > 50 || window.scrollY > 50) this.showArrowBottom = false;
    else this.showArrowBottom = true;
  }


  onShowDetails(product: Product) {
    this.product = product;
    this.showDetailsProduct = true;
    document.body.style.overflowY = 'hidden';
  }
  

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    console.log(window.scrollY);
    if (window.pageXOffset > 50 || window.scrollY > 50) {
      this.showArrowBottom = false;
    } else {
      this.showArrowBottom = true;
    }
  }


  gotToPositonScroll() {
    if (this.showArrowBottom) window.scrollTo(0, this.scrollHeight);
    else window.scrollTo(0, 0);
  }
}

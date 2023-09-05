import { Component} from '@angular/core';
import { Product } from '../_interfaces/prodoct.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showDetailsProduct = false;
  product: Product;
  
  constructor() { }


  ngOnInit(): void {
    
  }


  onShowDetails(product: Product) {
    this.product = product;
    this.showDetailsProduct = true
  }
  
}

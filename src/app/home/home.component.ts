import { Component} from '@angular/core';
import { Product } from '../_interfaces/prodoct.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showDetailsProduct = false;
  details: { index: number, procuct: Product };
  
  constructor() { }


  ngOnInit(): void {
    
  }


  onShowDetails(event: { index: number, product: Product}) {
    this.showDetailsProduct = true
  }
  
}

import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_interfaces/prodoct.interface';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  @Input({ required: true }) product: Product;


  ngOnInit() {

  }
}

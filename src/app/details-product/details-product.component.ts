import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../_interfaces/prodoct.interface';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  @Input({ required: true }) product: Product;
  @Input({ required: true }) showDetailsProduct: boolean;
  @Output() OnshowDetailsProduct = new EventEmitter<boolean>();


  ngOnInit() {

  }
}

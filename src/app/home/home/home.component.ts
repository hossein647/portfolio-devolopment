import { Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showDetailsProduct = false;
  
  constructor() { }


  ngOnInit(): void {
    
  }


  onShowDetails(event: { index: number, product: HTMLDivElement}) {
    this.showDetailsProduct = true
  }
  
}

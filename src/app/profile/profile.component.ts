import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  phoneClicked(phone: HTMLImageElement) {
    const phoneIcon = phone.src.includes('phone');
    if (phoneIcon) phone.src = './../../../assets/img/copy-regular.svg';
    else {
      phone.src = './../../../assets/img/phone-solid.svg';
      navigator.clipboard.writeText('09149584922');
    }
  }
}

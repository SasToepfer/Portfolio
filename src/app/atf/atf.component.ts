import { Component } from '@angular/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  imageSrc = './assets/img/profile_picture_grey.png';

  onPictureHover() {
    this.imageSrc = './assets/img/profile_picture.png';
  }

  onPictureLeave() {
    this.imageSrc = './assets/img/profile_picture_grey.png';
  }
}
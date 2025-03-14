import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService } from '../translation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss'
})
export class ArtComponent {
  images = [
    { url: './assets/img/3D-Art/DBS1.jpg', alt: 'Bild 1' },
    { url: './assets/img/3D-Art/DBS2.jpg', alt: 'Bild 2' },
    { url: './assets/img/3D-Art/DBS3.jpg', alt: 'Bild 3' },
    { url: './assets/img/3D-Art/DBS4.jpg', alt: 'Bild 4' },
    { url: './assets/img/3D-Art/DBS5.jpg', alt: 'Bild 5' },
    { url: './assets/img/3D-Art/DBS6.jpg', alt: 'Bild 6' },
    { url: './assets/img/3D-Art/DBS7.jpg', alt: 'Bild 7' },
    { url: './assets/img/3D-Art/TeehousePicture.jpg', alt: 'Bild 8' },
    { url: './assets/img/3D-Art/Catni2.jpg', alt: 'Bild 9' },
    { url: './assets/img/3D-Art/CatniForestRender.jpg', alt: 'Bild 10' },
    { url: './assets/img/3D-Art/TD_Enemies.jpg', alt: 'Bild 11' },
    { url: './assets/img/3D-Art/TD_Drinks.jpg', alt: 'Bild 12' },
    { url: './assets/img/3D-Art/CarRender_Side2.jpg', alt: 'Bild 13' },
  ];

  isOverlayOpen = false;
  currentImageIndex = 0;

  isGerman: boolean = true;
  private languageSubscription!: Subscription;


  constructor(private translationService: TranslationService) {
  }

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  openOverlay(index: number) {
    this.currentImageIndex = index;
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }

  ngOnInit() {
    this.languageSubscription = this.translationService.language$.subscribe((isGerman) => {
      this.isGerman = isGerman;
    })
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}

import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  isGerman: boolean = true;
  private languageSubscription!: Subscription;
  imageSrc = './assets/img/profile_picture_grey.png';

  constructor(private translationService: TranslationService) {}

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

  onPictureHover() {
    this.imageSrc = './assets/img/profile_picture.png';
  }

  onPictureLeave() {
    this.imageSrc = './assets/img/profile_picture_grey.png';
  }
}
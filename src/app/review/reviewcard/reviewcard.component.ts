import { Component, Input } from '@angular/core';
import { ReviewInterface } from '../../interface/review-interface';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reviewcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviewcard.component.html',
  styleUrl: './reviewcard.component.scss'
})
export class ReviewcardComponent {
  @Input() review!: ReviewInterface;
  isGerman: boolean = true;
  private languageSubscription!: Subscription;

  get cardImagePath(): string{
    return this.review.cardimg === 1 ? "./assets/img/CardA.jpg" : "./assets/img/CardB.jpg";
    
  }

   constructor(private translationService: TranslationService) {
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

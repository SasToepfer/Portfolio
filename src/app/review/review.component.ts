import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../translation.service';
import { ReviewcardComponent } from './reviewcard/reviewcard.component';
import { ReviewInterface } from '../interface/review-interface';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ReviewcardComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  isGerman: boolean = true;
  private languageSubscription!: Subscription;

  reviews: ReviewInterface[] = [{
    text: "will be filled until the end of March",
    name: "Person A",
    link: "",
    cardimg: 1
  },
  {
    text: "will be filled until the end of March",
    name: "Person B",
    link: "",
    cardimg: 2
  },
  {
    text: "will be filled until the end of March",
    name: "Person C",
    link: "",
    cardimg: 1
  }];

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

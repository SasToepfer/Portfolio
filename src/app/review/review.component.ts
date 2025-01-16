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
    text: "ganz okay",
    name: "Peter Lustig",
    link: "",
    cardimg: 1
  },
  {
    text: "war mal da",
    name: "Tom Ate",
    link: "",
    cardimg: 2
  },
  {
    text: "sympathisch, man kann sich unterhalten",
    name: "Jim Panse",
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

import { Component, Input } from '@angular/core';
import { ReviewInterface } from '../../interface/review-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviewcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviewcard.component.html',
  styleUrl: './reviewcard.component.scss'
})
export class ReviewcardComponent {
  @Input() review!: ReviewInterface;

  get cardImagePath(): string{
    return this.review.cardimg === 1 ? "./assets/img/CardA.png" : "./assets/img/CardB.png";
    
  }
}

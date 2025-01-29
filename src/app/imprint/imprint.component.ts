import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  isGerman: boolean = true;
  private languageSubscription!: Subscription;

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

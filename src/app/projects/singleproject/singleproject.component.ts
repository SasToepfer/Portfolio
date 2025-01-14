import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../translation.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-singleproject',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {
  @Input() project!: {
    name: string;
    description_short_eng: string;
    description_short_de: string;
    path: string;
  }

  isGerman: boolean = true;
  private languageSubscription!: Subscription


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

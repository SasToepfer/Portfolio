import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent implements OnInit, OnDestroy {
  location: string = "../../assets/img/Location_de.png";
  isGerman: boolean = true;
  private languageSubscription!: Subscription;


  constructor(private translationService: TranslationService) {
  }

  ngOnInit() {
    this.languageSubscription = this.translationService.language$.subscribe((isGerman) => {
      this.isGerman = isGerman;
      this.location = isGerman ? "./assets/img/Location_de.png" : "./assets/img/Location_eng.png"
    })
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isGerman: boolean = true;
  private languageSubscription!: Subscription;
  isProjectPage: boolean = false;
  isPrivacyPolicy: boolean = false;
  isImprint: boolean = false;

  constructor(public translationService: TranslationService, private router: Router) {
      this.router.events.subscribe(() => {
        this.isProjectPage = this.router.url.includes('/project/');
        this.isPrivacyPolicy = this.router.url.includes('/privacy');
        this.isImprint = this.router.url.includes('/imprint');
      });
    }

  footerButtons = [
    {
      name: "GitHub",
      icon: "./assets/img/icons/GithubIconSmall.png",
      link: "https://github.com/SasToepfer"
    },
    {
      name: "LinkedIn",
      icon: "./assets/img/icons/LinkedinIconSmall.png",
      link: "https://www.linkedin.com/in/sascha-t%C3%B6pfer-2a0b1319a/"
    },
    {
      name: "Email",
      icon: "./assets/img/icons/MailIconSmall.png",
      link: "mailto:info@sascha-toepfer-dev.de"
    },
  ]

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

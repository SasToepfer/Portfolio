import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languageIcon: string = './assets/img/switch_de.png';
  isGerman: boolean = true;
  isProjectPage: boolean = false;

  constructor(public translationService: TranslationService, private router: Router) {
    this.router.events.subscribe(() => {
      this.isProjectPage = this.router.url.includes('/project/');
    });
  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
    this.languageIcon = this.isGerman ? './assets/img/switch_de.png' : './assets/img/switch_eng.png';
    const links = document.querySelectorAll('a');
    const circleWidth = this.isGerman ? '10rem' : '8rem';
    links.forEach((link) => {
      link.style.setProperty('--circleWidth', circleWidth);
    });


    this.translationService.switchLanguage();
  }

}

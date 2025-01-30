import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  languageIcon: string = './assets/img/switch_de.png';
  isGerman: boolean = true;
  isProjectPage: boolean = false;
  isPrivacyPolicy: boolean = false;
  isImprint: boolean = false;
  isBurgerMenuOpen: boolean = false;

  private languageSubscription!: Subscription;

  constructor(public translationService: TranslationService, private router: Router) {
    this.router.events.subscribe(() => {
      this.isProjectPage = this.router.url.includes('/project/');
      this.isPrivacyPolicy = this.router.url.includes('/privacy');
      this.isImprint = this.router.url.includes('/imprint');
    });
  }

  ngOnInit() {
    this.languageSubscription = this.translationService.language$.subscribe(isGerman => {
      this.isGerman = isGerman;
      this.languageIcon = isGerman ? './assets/img/switch_de.png' : './assets/img/switch_eng.png';
    });
  }

  toggleLanguage() {
    this.translationService.switchLanguage();

    this.isGerman = this.translationService.getCurrentLanguage();
    this.languageIcon = this.isGerman ? './assets/img/switch_de.png' : './assets/img/switch_eng.png';

    const links = document.querySelectorAll('a');
    const circleWidth = this.isGerman ? '10rem' : '8rem';
    links.forEach((link) => {
      link.style.setProperty('--circleWidth', circleWidth);
    });
  }

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  closeBurgerMenu() {
    if (this.isBurgerMenuOpen) {
      this.isBurgerMenuOpen = false;
    }
  }

  scrollToSection(sectionId: string) {
    this.closeBurgerMenu(); 
    const header = document.querySelector('app-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 80; 
    const offset = 55;
  
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.smoothScroll(sectionId, headerHeight, offset);
        }, 100);
      });
    } else {
      this.smoothScroll(sectionId, headerHeight, offset);
    }
  }
  
  private smoothScroll(sectionId: string, headerHeight: number, offset: number) {
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  
      const isSmallScreen = window.innerWidth <= 800;
      const offsetPosition = isSmallScreen ? elementPosition - headerHeight - offset : elementPosition;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}

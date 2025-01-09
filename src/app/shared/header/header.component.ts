import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languageIcon: string = '../../../assets/img/switch_de.png';
  isGerman: boolean = true;

  constructor(public translationService: TranslationService) {

  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
    this.languageIcon = this.isGerman ? '../../../assets/img/switch_de.png' : '../../../assets/img/switch_eng.png';
    const links = document.querySelectorAll('a');
    const circleWidth = this.isGerman ? '10rem' : '8rem';
    links.forEach((link) => {
      link.style.setProperty('--circleWidth', circleWidth);
    });


    this.translationService.switchLanguage();
  }
}

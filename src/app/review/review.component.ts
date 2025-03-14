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
    text_en: "Sascha has years of experience as a developer and an impressive level of expertise, which he regularly shares with others. Throughout the course, he consistently supported his fellow learners and personally provided me with valuable help in coding. His absolute reliability makes him a great asset to any team, and he effortlessly takes on leadership roles within a group.",
    text_de: "Sascha verfügt über jahrelange Erfahrung als Entwickler und ein beeindruckendes Fachwissen, das er regelmäßig mit anderen teilt. Im Kurs hat er stets seine Mitlernenden unterstützt und mir persönlich oft wertvolle Hilfe beim Coden geleistet. Seine absolute Zuverlässigkeit macht ihn zu einem Gewinn für jedes Team, und es gelingt ihm problemlos, eine Führungsrolle innerhalb der Gruppe einzunehmen.",
    name: "Marcel Steffen",
    link: "https://www.linkedin.com/in/marcel-steffen-3b650b305/",
    cardimg: 1
  },
  {
    text_en: "I really appreciated working with Sascha at DA. As a team leader, his structured and proactive approach significantly contributed to the success of our project. Additionally, his competence and willingness to help made working with him very pleasant and straightforward. His readiness to support us with clear explanations and patience in coding challenges made him a valuable member of our entire course from the very beginning.",
    text_de: "Ich habe die Zusammenarbeit mit Sascha bei der DA sehr geschätzt. Als Gruppenleiter trug er mit seiner strukturierten und proaktiven Herangehensweise maßgeblich zum Erfolg unseres Projektes bei. Zudem machte seine kompetente und hilfsbereite Art die Zusammenarbeit mit ihm sehr angenehm und unkompliziert. Seine Bereitschaft, uns mit verständlichen Erläuterungen und Geduld bei Coding-Problemen zur Seite zu stehen, machte ihn von Anfang an zu einem wertvollen Mitglied unseres gesamten Kurses.",
    name: "Hendrik Bischoping",
    link: "",
    cardimg: 2
  },
  {
    text_en: "Sascha was a key point of contact for our team due to his expertise in game development and as a 3D artist. He immediately incorporated his professional experience into our project onboarding. His feedback provided practical solutions and guided the entire team. Thank you, Sascha – it was a truly valuable learning experience!",
    text_de: "Sascha war aufgrund seiner Expertise in der Spielentwicklung und 3D-Artist eine zentrale Anlaufstelle für unser Team. Seine Berufserfahrung hat er sofort in unsere Projekteinarbeitung einfließen lassen. Durch sein Feedback hat er die praktische Lösung nähergebracht und das gesamte Team geführt. Danke Sascha. Es war sehr lehrreich.",
    name: "Andreas Welker",
    link: "https://www.linkedin.com/in/andreaswelker/",
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

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
    text_en: "Even though we haven’t worked directly together on a group project, Sascha has always been a great support to me. He was always the first to volunteer to help me and other students with challenges – and he did so with incredible patience and clarity, almost like a second mentor. Especially on the days when things were tough for me, he always motivated me to keep going and not give up. His willingness to help and his positive nature have been a huge support during the training and one of the reasons I stayed committed. For that, I am truly grateful!",
    text_de: "Auch wenn wir bisher keine direkte Gruppenarbeit zusammen hatten, war Sascha immer eine große Unterstützung für mich. Er war stets der Erste, der sich freiwillig meldete, um mir und anderen Schülern bei Schwierigkeiten zu helfen – und das mit einer unglaublichen Geduld und Klarheit, fast wie ein zweiter Mentor. Besonders an den Tagen, an denen es für mich schwer war, hat er mich immer motiviert, nicht aufzugeben und einfach weiterzumachen. Seine Hilfsbereitschaft und sein positives Wesen haben mir enorm geholfen während der Schulung und waren einer der Gründe, warum ich drangeblieben bin. Dafür bin ich ihm sehr dankbar!",
    name: "Osahon Schmolze",
    link: "https://www.linkedin.com/in/osahon-schmolze-0b51181a2/",
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

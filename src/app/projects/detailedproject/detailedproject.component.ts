import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../translation.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-detailedproject',
  standalone: true,
  imports: [],
  templateUrl: './detailedproject.component.html',
  styleUrl: './detailedproject.component.scss'
})
export class DetailedprojectComponent {

  project: any; // Hier könntest du auch ein spezifisches Interface verwenden
  isGerman: boolean = true;
  private languageSubscription!: Subscription;
  // projectName!: string; // Name des Projekts aus der Route

  // private projects = [
  //   // Deine Projektliste (kann auch aus einem Service geladen werden)
  //   { 
  //     name: "Join", 
  //     description_short_eng: "Task manager inspired by the Kanban System...",
  //     description_short_de: "Aufgabenmanager nach dem Vorbild des Kanban-Systems...",
  //     description_long_eng: "Task manager inspired by the Kanban System...",
  //     description_long_de: "Aufgabenmanager nach dem Vorbild des Kanban-Systems...",
  //     implementation_de: "",
  //     implementation_eng: "",
  //     duration: 0,
  //     path: "../../../assets/img/kanbanboard.jpg",
  //     software: ["html", "SCSS", "Angular"],
  //     github: "",
  //     link: ""
  //   },
  //   // Weitere Projekte
  // ];

  // @Input() projects!: {
  //   name: string;
  //   description_short_eng: string;
  //   description_short_de: string;
  //   description_long_eng: string;
  //   description_long_de: string;
  //   implementation_de: string;
  //   implementation_eng: string;
  //   duration: number;
  //   path: string;
  //   software: string[];
  //   github: string;
  //   link: string;
  // }
  // isGerman: boolean = true;
  // private languageSubscription!: Subscription


  constructor(
    private route: ActivatedRoute,
    private translationService: TranslationService,
    private projectService: ProjectService
  ) {}


  ngOnInit() {

    // Projektname aus der Route abrufen
    const projectName = this.route.snapshot.paramMap.get('id');

    if (projectName) {
      // Passendes Projekt aus dem Service laden
      this.project = this.projectService.getProjectByName(projectName);
    }

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

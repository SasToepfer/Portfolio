import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../translation.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-detailedproject',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detailedproject.component.html',
  styleUrl: './detailedproject.component.scss'
})
export class DetailedprojectComponent {

  project: any;
  isGerman: boolean = true;
  private languageSubscription!: Subscription;
  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
    private projectService: ProjectService
  ) { }


  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const projectName = paramMap.get('id');
      if (projectName) {
        this.project = this.projectService.getProjectByName(projectName);
        console.log('Aktuelles Projekt geladen:', this.project.name);
      }
    })

    

    this.languageSubscription = this.translationService.language$.subscribe((isGerman) => {
      this.isGerman = isGerman;
    })
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  goToNextProject() {
    const projects = this.projectService.getProjects();
    const currentIndex = projects.findIndex(p => p.name === this.project.name);
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex].name;
  }
}

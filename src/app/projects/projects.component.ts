import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { Subscription } from 'rxjs';
import { SingleprojectComponent } from './singleproject/singleproject.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleprojectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isGerman : boolean = true;
  private languageSubscription! : Subscription;
  projects: (any)[] = [];
  
  constructor(
    private translationService : TranslationService,
    private projectService: ProjectService
  ) {}
  
  ngOnInit() {
    this.languageSubscription = this.translationService.language$.subscribe((isGerman) => {
      this.isGerman = isGerman;
    });
    this.projects = this.projectService.getProjects();
  }
  
  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}



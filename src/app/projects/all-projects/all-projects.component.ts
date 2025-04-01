import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../translation.service';
import { ProjectService } from '../../project.service';
import { SingleprojectComponent } from '../singleproject/singleproject.component';
import { RouterModule } from '@angular/router';
import { SkillsetComponent } from '../../skillset/skillset.component';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent {
  isGerman: boolean = true;
  private languageSubscription!: Subscription;
  studyProjects: (any)[] = [];
  selfEmployedProjects: (any)[] = [];
  daProjects: (any)[] = [];
  skills = SkillsetComponent.skills;

  constructor(
    private translationService: TranslationService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.languageSubscription = this.translationService.language$.subscribe((isGerman) => {
      this.isGerman = isGerman;
    });
    this.studyProjects = this.projectService.getStudyProjects();
    this.selfEmployedProjects = this.projectService.getSelfEmployedProjects();
    this.daProjects = this.projectService.getDaProjects();
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  getIconPath(skillName: string): string | undefined {
    const skill = this.skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
    return skill ? skill.path : undefined;
  }
}

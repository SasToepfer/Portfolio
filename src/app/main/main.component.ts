import { Component } from '@angular/core';
import { AtfComponent } from '../atf/atf.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReviewComponent } from '../review/review.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AtfComponent, AboutmeComponent, SkillsetComponent, ProjectsComponent, ReviewComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

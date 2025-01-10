import { Component } from '@angular/core';
import { SingleskillComponent } from './singleskill/singleskill.component';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [SingleskillComponent],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  skills = [
    { name: "Unreal Engine", path: "../../../assets/img/icons/unreal_engine.png" },
    { name: "Unity", path: "../../../assets/img/icons/unity.png" },
    { name: "Blender", path: "../../../assets/img/icons/blender-icon.png" },
    { name: "HTML", path: "../../../assets/img/icons/html_ico.png" },
    { name: "CSS", path: "../../../assets/img/icons/css_ico.png" },
    { name: "Javascript", path: "../../../assets/img/icons/javascript_ico.png" },
    { name: "C#", path: "../../../assets/img/icons/c-sharp_ico.png" },
    { name: "C++", path: "../../../assets/img/icons/c-plusplus_ico.png" },
    { name: "Angular", path: "../../../assets/img/icons/angular_ico.png" },
    { name: "Photoshop", path: "../../../assets/img/icons/photoshop_ico.png" },
    { name: "Git", path: "../../../assets/img/icons/git_ico.png" },
    { name: "Jira", path: "../../../assets/img/icons/jira_ico.png" },
    { name: "Scrum", path: "../../../assets/img/icons/scrum_ico.png" },
    { name: "Da Vinci Resolve", path: "../../../assets/img/icons/davinci_ico.png" },
    { name: "Material Design", path: "../../../assets/img/icons/MaterialDesign_ico.png" },
    { name: "REST API", path: "../../../assets/img/icons/restAPI_ico.png" }
  ];

  
}

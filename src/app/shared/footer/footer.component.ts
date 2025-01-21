import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerButtons = [
    {
      name: "GitHub",
      icon: "./assets/img/icons/GithubIconSmall.png",
      link: "https://github.com/SasToepfer"
    },
    {
      name: "LinkedIn",
      icon: "./assets/img/icons/LinkedinIconSmall.png",
      link: "https://www.linkedin.com/in/sascha-t%C3%B6pfer-2a0b1319a/"
    },
    {
      name: "Email",
      icon: "./assets/img/icons/MailIconSmall.png",
      link: ""
    },
  ]
}

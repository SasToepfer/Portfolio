import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singleskill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleskill.component.html',
  styleUrl: './singleskill.component.scss'
})
export class SingleskillComponent {
  @Input() skill!: { name: string; path: string };

  isHovered: boolean = false;
  
}
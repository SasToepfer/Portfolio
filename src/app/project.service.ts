import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = [
    {
      name: "Join",
      description_short_eng: "Task manager inspired by the Kanban System...",
      description_short_de: "Aufgabenmanager nach dem Vorbild des Kanban-Systems...",
      description_long_eng: "Task manager inspired by the Kanban System...",
      description_long_de: "Aufgabenmanager nach dem Vorbild des Kanban-Systems...",
      implementation_de: "",
      implementation_eng: "",
      duration: 0,
      path: "../../../assets/img/kanbanboard.jpg",
      software: ["html", "SCSS", "Angular"],
      github: "",
      link: ""
    },
    { 
      name: "El Pollo Loco", 
      description_short_eng: "2D platformer game with jump-and-run mechanics, built using an object-oriented approach. Players control a character to dodge enemies, collect mana runes, and cast spells like fireballs to overcome obstacles and defeat opponents.", 
      description_short_de: "2D-Plattformspiel mit Sprung- und Laufmechanik, basierend auf einem objektorientierten Ansatz. Der Spieler steuert eine Figur, weicht Gegnern aus, sammelt Mana-Runen und setzt Zauber wie Feuerbälle ein, um Hindernisse zu überwinden und Gegner zu besiegen.", 
      description_long_eng: "2D platformer game with jump-and-run mechanics, built using an object-oriented approach. Players control a character to dodge enemies, collect mana runes, and cast spells like fireballs to overcome obstacles and defeat opponents.", 
      description_long_de: "2D-Plattformspiel mit Sprung- und Laufmechanik, basierend auf einem objektorientierten Ansatz. Der Spieler steuert eine Figur, weicht Gegnern aus, sammelt Mana-Runen und setzt Zauber wie Feuerbälle ein, um Hindernisse zu überwinden und Gegner zu besiegen.", 
      implementation_de: "",
      implementation_eng: "",
      duration: 0,
      path: "../../../assets/img/ElPolloLoco.jpg",
      software: [],
      github: "",
      link: "" 
    },
    { 
      name: "RLTD", 
      description_short_eng: "A mix of tower defense and dungeon crawler with roguelike elements, where glasses act as towers filled with drinks for unique boosts and abilities. Defeat enemy waves to unlock new rooms and face the boss.", 
      description_short_de: "Ein Mix aus Tower Defense und Dungeon Crawler mit Roguelike-Elementen: Gläser dienen als Türme, gefüllt mit Getränken für einzigartige Boosts und Fähigkeiten. Besiege Gegnerwellen, um Räume freizuschalten und den Boss zu erreichen.", 
      description_long_eng: "The game blends tower defense and dungeon crawler elements with a roguelike twist. Players place glasses as towers, each with unique shooting patterns and stats, and fill them with drinks to boost abilities. Combining two drinks grants a unique special ability. Defeat three waves of enemies to earn a key and unlock new rooms with tougher foes or the boss.", 
      description_long_de: "Das Spiel kombiniert Tower Defense und Dungeon Crawler mit Roguelike-Elementen. Spieler platzieren Gläser als Türme, die einzigartige Angriffsmuster und Werte haben, und füllen sie mit Getränken, um Fähigkeiten zu verbessern. Die Kombination aus zwei Getränken verleiht eine spezielle Fähigkeit. Besiege drei Wellen von Gegnern, um einen Schlüssel zu erhalten und neue Räume mit stärkeren Feinden oder den Boss freizuschalten.",
      implementation_de: "",
      implementation_eng: "",
      duration: 0, 
      path: "../../../assets/img/rltd_screenshot.png",
      software: ["Unreal"],
      github: "",
      link: "" 
    },
    { 
      name: "DA BUBBLE", 
      description_short_eng: "coming soon", 
      description_short_de: "coming soon", 
      description_long_eng: "coming soon", 
      description_long_de: "coming soon", 
      implementation_de: "",
      implementation_eng: "",
      duration: 0,
      path: "../../../assets/img/DABubble.png",
      software: [],
      github: "",
      link: "" 
    },
    // Weitere Projekte...
  ];
  constructor() { }

  // Methode, um alle Projekte abzurufen
  getProjects() {
    return this.projects;
  }

  // Methode, um ein einzelnes Projekt anhand des Namens zu finden
  getProjectByName(name: string) {
    return this.projects.find(project => project.name === name);
  }
}

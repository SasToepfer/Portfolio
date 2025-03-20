import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = [
    {
      name: "Join",
      description_short_eng: "A Kanban-inspired task manager. Features real-time task synchronization, Firebase authentication, and a drag-and-drop interface for seamless task management. Built with Angular and Firebase.",
      description_short_de: "Ein Kanban-basierter Aufgabenmanager. Bietet Echtzeit-Synchronisierung, Firebase-Authentifizierung und eine Drag-and-Drop-Oberfläche für intuitives Task-Management. Erstellt mit Angular und Firebase.",
      description_long_eng: "Join is a collaborative task manager designed for organizing and tracking tasks efficiently. Users can create, assign, and move tasks across different workflow stages. The project was developed in a small team of 3 people, focusing on usability and real-time updates.",
      description_long_de: "Join ist ein kollaborativer Aufgabenmanager zur effizienten Organisation und Verfolgung von Tasks. Nutzer können Aufgaben erstellen, zuweisen und durch verschiedene Workflow-Phasen verschieben. Das Projekt wurde in einem kleinen Team aus 3 Personen mit Fokus auf Benutzerfreundlichkeit und Echtzeit-Updates entwickelt.",
      implementation_de: "Ich war verantwortlich für die Implementierung des Firebase-Datenbankzugriffs, die Benutzer-Authentifizierung und den Großteil der Kernlogik. Zudem übernahm ich eine leitende Rolle, um die Projektkoordination und technische Entscheidungen zu steuern.",
      implementation_eng: "I was responsible for implementing Firebase database access, authentication, and most of the project’s core logic. Additionally, I took on a leadership role, ensuring smooth project coordination and technical decision-making.",
      duration: 1,
      path: "./assets/img/kanbanboard.jpg",
      software: ["html", "SCSS", "Angular"],
      donwloadOnly: false,
      github: "https://github.com/SasToepfer/join",
      link: "https://sascha-toepfer-dev.de/join"
    },
    { 
      name: "Noitahyppy", 
      description_short_eng: "2D platformer game with jump-and-run mechanics, built using an object-oriented approach. Players control a character to dodge enemies, collect mana runes, and cast spells like fireballs to overcome obstacles and defeat opponents.", 
      description_short_de: "2D-Plattformspiel mit Sprung- und Laufmechanik, basierend auf einem objektorientierten Ansatz. Der Spieler steuert eine Figur, weicht Gegnern aus, sammelt Mana-Runen und setzt Zauber wie Feuerbälle ein, um Hindernisse zu überwinden und Gegner zu besiegen.", 
      description_long_eng: "2D platformer game with jump-and-run mechanics, built using an object-oriented approach. Players control a character to dodge enemies, collect mana runes, and cast spells like fireballs to overcome obstacles and defeat opponents.", 
      description_long_de: "2D-Plattformspiel mit Sprung- und Laufmechanik, basierend auf einem objektorientierten Ansatz. Der Spieler steuert eine Figur, weicht Gegnern aus, sammelt Mana-Runen und setzt Zauber wie Feuerbälle ein, um Hindernisse zu überwinden und Gegner zu besiegen.", 
      implementation_de: "Selbst erstellte 3D-Modelle wurden in Blender animiert und als 2D-Animationen exportiert, um sie nahtlos in die Spielwelt zu integrieren. Die Entwicklung der Spielmechanik und Logik erfolgte in JavaScript innerhalb einer HTML-Canvas-Umgebung. Dabei lag der Fokus auf einer strukturierten, objektorientierten Herangehensweise, um den Code effizient und wartbar zu gestalten.",
      implementation_eng: "Custom 3D models were created and animated in Blender, then exported as 2D animations for seamless integration into the game world. The game mechanics and logic were developed in JavaScript within an HTML Canvas environment. Emphasis was placed on a structured, object-oriented workflow to ensure efficient and maintainable code.",
      duration: 0.75,
      path: "./assets/img/ElPolloLoco.jpg",
      software: ["Javascript"],
      donwloadOnly: false,
      github: "https://github.com/SasToepfer/ElPolloLoco",
      link: "https://sascha-toepfer-dev.de/Noitahyppy/" 
    },
    { 
      name: "RLTD", 
      description_short_eng: "A mix of tower defense and dungeon crawler with roguelike elements, where glasses act as towers filled with drinks for unique boosts and abilities. Defeat enemy waves to unlock new rooms and face the boss.", 
      description_short_de: "Ein Mix aus Tower Defense und Dungeon Crawler mit Roguelike-Elementen: Gläser dienen als Türme, gefüllt mit Getränken für einzigartige Boosts und Fähigkeiten. Besiege Gegnerwellen, um Räume freizuschalten und den Boss zu erreichen.", 
      description_long_eng: "The game blends tower defense and dungeon crawler elements with a roguelike twist. Players place glasses as towers, each with unique shooting patterns and stats, and fill them with drinks to boost abilities. Combining two drinks grants a unique special ability. Defeat three waves of enemies to earn a key and unlock new rooms with tougher foes or the boss.", 
      description_long_de: "Das Spiel kombiniert Tower Defense und Dungeon Crawler mit Roguelike-Elementen. Spieler platzieren Gläser als Türme, die einzigartige Angriffsmuster und Werte haben, und füllen sie mit Getränken, um Fähigkeiten zu verbessern. Die Kombination aus zwei Getränken verleiht eine spezielle Fähigkeit. Besiege drei Wellen von Gegnern, um einen Schlüssel zu erhalten und neue Räume mit stärkeren Feinden oder den Boss freizuschalten.",
      implementation_de: "Der gesamte kreative Prozess, einschließlich Game Design und 3D-Art, lag in meiner Verantwortung. Die 3D-Modelle wurden in Blender erstellt und texturiert. Darüber hinaus habe ich die Programmierung der Spielmechaniken in Unreal Engine übernommen, einschließlich der Implementierung von Tower- und Gegner-Logik, der Erstellung einzigartiger Fähigkeiten durch Getränkekombinationen und der Gestaltung des Fortschrittssystems. Neben der technischen Umsetzung war es mir wichtig, eine nahtlose Integration zwischen Gameplay und visuellem Design zu gewährleisten. Versionskontrolle und Organisation erfolgten über GitHub und Nuclino.",
      implementation_eng: "The entire creative process, including game design and 3D art, was handled solely by me. I created 3D models in Blender and textured them. Additionally, I programmed core gameplay mechanics in Unreal Engine, including the implementation of tower and enemy logic, the unique ability system based on drink combinations, and the progression system. Ensuring seamless integration between gameplay and visual design was a key focus. Version control and project organization were managed through GitHub and Nuclino.",
      duration: 18, 
      path: "./assets/img/rltd_screenshot.jpg",
      software: ["Unreal Engine","Git","Blender","Photoshop"],
      donwloadOnly: true,
      github: "",
      link: "https://www.dropbox.com/scl/fo/5sbsma3jgrjm2ctqd75en/AM3sOtP58EMqHvNMhHcurZQ?rlkey=zfncu96pxz3oxtdup8ijzdriz&st=pzvx2jgu&dl=0" 
    },
    // { 
    //   name: "DA BUBBLE", 
    //   description_short_eng: "coming soon", 
    //   description_short_de: "coming soon", 
    //   description_long_eng: "coming soon", 
    //   description_long_de: "coming soon", 
    //   implementation_de: "",
    //   implementation_eng: "",
    //   duration: 0,
    //   path: "../../../assets/img/DABubble.png",
    //   software: ["Angular"],
    //   donwloadOnly: false,
    //   github: "",
    //   link: "" 
    // },
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectByName(name: string) {
    return this.projects.find(project => project.name === name);
  }
}

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
      software: ["Unreal Engine", "Git", "Blender", "Photoshop"],
      donwloadOnly: true,
      github: "",
      link: "https://www.dropbox.com/scl/fo/5sbsma3jgrjm2ctqd75en/AM3sOtP58EMqHvNMhHcurZQ?rlkey=zfncu96pxz3oxtdup8ijzdriz&st=pzvx2jgu&dl=0"
    },
    {
      name: "More Projects",
      description_short_eng: "see a list of a few more projects i made",
      description_short_de: "eine Aufzählung einiger weiterer Projekte die ich erstellt habe",
      description_long_eng: "coming soon",
      description_long_de: "coming soon",
      implementation_de: "",
      implementation_eng: "",
      duration: 0,
      path: "./assets/img/project-images/moreProjects.jpg",
      software: [""],
      donwloadOnly: false,
      github: "",
      link: ""
    },
  ];

  private studyProjects = [
    {
      "name": "Calming Leaf (2020)",
      "description_short_eng": "Tea house simulation game where players manage a tea shop, growing their own tea leaves and serving human customers by day and Yokai spirits by night.",
      "description_short_de": "Teehaus-Simulationsspiel, in dem Spieler ein Teehaus verwalten, ihre eigenen Teeblätter anbauen und tagsüber Menschen sowie nachts Yokai-Geister bedienen.",
      "description_long_eng": "In Calming Leaf, you play as the owner of a tea shop, growing your own tea leaves and serving fresh tea to customers. During the day, you cater to human customers, while at night, the dimension shifts, and you serve spirits and Yokai from Japanese folklore.",
      "description_long_de": "In Calming Leaf spielst du die Besitzerin eines Teehauses, die ihre eigenen Teeblätter anbaut und frischen Tee serviert. Tagsüber bedienst du menschliche Kunden, während sich nachts die Dimension verändert und du Geistern und Yokai aus der japanischen Folklore Tee servierst.",
      "implementation_de": "Das Spiel wurde mit der Unreal Engine entwickelt. Die Assets wurden in Blender erstellt und die Teamkoordination erfolgte über Asana und Nuclino. Mein Hauptbeitrag bestand in der Erstellung der 3D-Umgebungen als Environment Artist.",
      "implementation_eng": "Developed using Unreal Engine, with assets created in Blender. Team coordination was managed via Asana and Nuclino. My primary contribution was designing 3D environments as an Environment Artist.",
      "duration": 2.5,
      "path": "./assets/img/project-images/CalmingLeaf.jpg",
      "software": ["Unreal Engine", "Blender", "Github"],
      "downloadOnly": false,
      "github": "",
      "link": "https://www.youtube.com/watch?v=pAHyZ_rsuKw"
    },
    {
      "name": "A Cute Horrorhouse (2019)",
      "description_short_eng": "A horror game featuring cute 2D billboard sprite enemies, blending an eerie atmosphere with an unusual visual style.",
      "description_short_de": "Ein Horrorspiel mit niedlichen 2D-Billboard-Sprite-Gegnern, das eine unheimliche Atmosphäre mit einem ungewöhnlichen visuellen Stil verbindet.",
      "description_long_eng": "A Cute Horrorhouse is a horror game where players face off against adorable yet eerie 2D billboard sprite enemies. The game was developed during an internship phase and was intended to serve as the foundation for a future company. Unfortunately, the project was abandoned after the departure of the 2D artist.",
      "description_long_de": "A Cute Horrorhouse ist ein Horrorspiel, in dem Spieler gegen niedliche, aber unheimliche 2D-Billboard-Sprite-Gegner antreten. Das Spiel wurde während einer Praktikumsphase entwickelt und sollte als Grundlage für ein zukünftiges Unternehmen dienen. Leider wurde das Projekt nach dem Ausstieg der 2D-Künstlerin aufgegeben.",
      "implementation_de": "Das Spiel wurde mit der Unreal Engine entwickelt. Die Projektkoordination erfolgte über Trello und Nuclino, während Adobe Character Animator für 2D-Animationen und Reaper für Sounddesign genutzt wurden. Als Projektleiter übernahm ich auch Aufgaben im Game Design, Sounddesign, Programmierung und 2D-Animation.",
      "implementation_eng": "Developed using Unreal Engine, with project coordination managed via Trello and Nuclino. Adobe Character Animator was used for 2D animations, and Reaper for sound design. As project lead, I contributed to game design, programming, 2D animation, and sound.",
      "duration": 5,
      "path": "./assets/img/project-images/ACuteHorrorhouse.jpg",
      "software": ["Unreal Engine"],
      "downloadOnly": false,
      "github": "",
      "link": "https://www.youtube.com/watch?v=j66G5r30XOQ"
    },
    {
      "name": "Evolution Zoo (2019)",
      "description_short_eng": "Zoo management simulation where players crossbreed animals to create unique hybrids and evolve them into larger creatures.",
      "description_short_de": "Zoo-Management-Simulation, in der Spieler Tiere kreuzen, um einzigartige Hybriden zu erschaffen und sie zu größeren Wesen weiterzuentwickeln.",
      "description_long_eng": "In Evolution Zoo, you take on the role of a zoo manager with the goal of attracting as many visitors as possible to maximize revenue. The game's unique feature is the ability to crossbreed animals, resulting in hybrids that can evolve into even bigger creatures.",
      "description_long_de": "In Evolution Zoo übernimmst du die Rolle eines Zoodirektors mit dem Ziel, möglichst viele Besucher anzulocken und hohe Einnahmen zu erzielen. Das besondere Feature des Spiels ist die Möglichkeit, Tiere zu kreuzen, um einzigartige Hybriden zu erschaffen, die sich weiterentwickeln können.",
      "implementation_de": "Das Spiel wurde mit der Unity Engine entwickelt. Die Teamkoordination erfolgte über Asana und Nuclino, während GitHub zur Versionskontrolle genutzt wurde. Meine Hauptaufgabe bestand in der Leitung des Teams als CEO, im Projektmanagement sowie im Game Design, mit gelegentlichen Aufgaben in der 3D-Animation.",
      "implementation_eng": "Developed using Unity, with team coordination managed via Asana and Nuclino, and version control handled through GitHub. My primary role was as CEO, leading the team, managing the project, and designing the game, with minor contributions to 3D animation.",
      "duration": 2,
      "path": "./assets/img/project-images/EvolutionZoo.jpg",
      "software": ["Unity"],
      "downloadOnly": false,
      "github": "",
      "link": "https://www.youtube.com/watch?v=IHAMQjWEFjI"
    },
    {
      "name": "Erbauer von Cant (2018)",
      "description_short_eng": "A digital adaptation of 'The Settlers of Catan' for Android and PC, allowing local network multiplayer gameplay.",
      "description_short_de": "Eine digitale Adaption von 'Die Siedler von Catan' für Android und PC mit Multiplayer-Funktion im lokalen Netzwerk.",
      "description_long_eng": "Erbauer von Cant is a digital adaptation of the classic board game 'The Settlers of Catan', designed for Android and PC. Players can engage in resource management, trading, and strategic building while competing over networked multiplayer sessions in the same local area network.",
      "description_long_de": "Erbauer von Cant ist eine digitale Adaption des Brettspiels 'Die Siedler von Catan' für Android und PC. Spieler verwalten Ressourcen, handeln und bauen strategisch, während sie in Multiplayer-Sessions innerhalb desselben lokalen Netzwerks gegeneinander antreten.",
      "implementation_de": "Das Spiel wurde mit der Unity Engine entwickelt und auf Android sowie PC spielbar gemacht. Die Versionskontrolle erfolgte über GitHub. Mein Hauptfokus lag auf der Programmierung der Spiellogik, insbesondere Inventar-, Ressourcen- und Handelsmechaniken sowie der Siegbedingungen.",
      "implementation_eng": "Developed using Unity and made available for Android and PC. Version control was managed via GitHub. My primary focus was programming core gameplay mechanics such as inventory, resource management, trading, and win conditions.",
      "duration": 1,
      "path": "./assets/img/project-images/ErbauerVonCant.jpg",
      "software": ["Unity", "GitHub"],
      "downloadOnly": false,
      "github": "",
      "link": "https://www.youtube.com/watch?v=N0xI2dg3K-Q"
    },
    {
      "name": "Valkyrie Nyr (2018)",
      "description_short_eng": "A Metroidvania-style jump & run game where players defeat bosses to gain unique abilities and uncover the story of Nyr's missing sister.",
      "description_short_de": "Ein Metroidvania-Jump-&-Run-Spiel, in dem Spieler Bosse besiegen, um einzigartige Fähigkeiten zu erlangen und die Geschichte von Nyrs verschwundener Schwester aufzudecken.",
      "description_long_eng": "In Valkyrie Nyr, you take on the role of Nyr, a warrior in search of her lost sister. Defeating powerful bosses grants you unique abilities that help you advance through the world. As you progress, you grow stronger, ultimately transforming into a Valkyrie to rescue your sister.",
      "description_long_de": "In Valkyrie Nyr schlüpfst du in die Rolle von Nyr, einer Kriegerin auf der Suche nach ihrer verschwundenen Schwester. Das Besiegen mächtiger Bosse verleiht dir einzigartige Fähigkeiten, mit denen du die Welt weiter erkunden kannst. Mit jedem Fortschritt wirst du stärker und kannst dich schließlich in eine Walküre verwandeln, um deine Schwester zu retten.",
      "implementation_de": "Das Spiel wurde mit C++ und der Monogame-Engine entwickelt. Die Teamkoordination erfolgte über Trello, während die Versionskontrolle über GitHub verwaltet wurde. Meine Hauptaufgaben umfassten Game Design, Programmierung der Gegner- und Boss-KI sowie die Erstellung von 2D-Animationen mit Spriter.",
      "implementation_eng": "Developed using C++ and the Monogame engine. Team coordination was handled via Trello, and version control was managed with GitHub. My primary responsibilities included game design, programming enemy and boss AI, and creating 2D animations using Spriter.",
      "duration": 2.5,
      "path": "./assets/img/project-images/nyr.gif",
      "software": ["C++", "Monogame", "GitHub", "Trello", "Spriter"],
      "downloadOnly": false,
      "github": "",
      "link": ""
    },
  ];

  private selfemployedProjects = [
    {
      "name": "Yugiquiz (2024)",
      "description_short_eng": "A quiz game where players compare Yugioh cards based on attributes like name length, ATK, DEF, level, or release date to earn points.",
      "description_short_de": "Ein Quizspiel, bei dem Spieler Yugioh-Karten anhand von Attributen wie Namenslänge, ATK, DEF, Level oder Veröffentlichungsdatum vergleichen, um Punkte zu sammeln.",
      "description_long_eng": "Yugiquiz is an engaging quiz game that challenges players to compare Yugioh cards based on various attributes. Players can choose specific question categories—such as name length, ATK, DEF, level, or release date—and select a monster type to filter the cards. The game presents two random cards, and players must decide which card has a higher, equal, or lower value for the given attribute. Correct answers earn points, and the game tracks high scores based on the selected question and monster type combination. With a clean interface and dynamic card loading, Yugiquiz offers a fun way for Yugioh fans to test their knowledge.",
      "description_long_de": "Yugiquiz ist ein unterhaltsames Quizspiel, das Spieler herausfordert, Yugioh-Karten anhand verschiedener Attribute zu vergleichen. Spieler können spezifische Fragekategorien wie Namenslänge, ATK, DEF, Level oder Veröffentlichungsdatum auswählen und einen Monstertyp festlegen, um die Karten zu filtern. Das Spiel präsentiert zwei zufällige Karten, und die Spieler müssen entscheiden, welche Karte einen höheren, gleichen oder niedrigeren Wert für das angegebene Attribut hat. Richtige Antworten bringen Punkte, und das Spiel speichert Highscores basierend auf der Kombination aus Frage und Monstertyp. Mit einer übersichtlichen Benutzeroberfläche und dynamischem Laden der Karten bietet Yugiquiz eine unterhaltsame Möglichkeit für Yugioh-Fans, ihr Wissen zu testen.",
      "implementation_de": "Ich habe das gesamte Projekt eigenständig entwickelt. Die Daten werden über eine REST-API von der Yugioh-Karten-Datenbank abgerufen und lokal gefiltert, um nur Monsterkarten zu verwenden. Die Spielmechaniken, einschließlich der zufälligen Kartenauswahl, der Fragenlogik und der Punktevergabe, wurden in JavaScript implementiert. Besondere Herausforderungen waren die korrekte Handhabung der API-Daten, insbesondere das Parsen der Veröffentlichungsdaten, und die Sicherstellung einer reibungslosen Benutzererfahrung durch asynchrones Laden der Kartendaten. Das Projekt wurde mit Git versioniert.",
      "implementation_eng": "I developed the entire project independently. Data is fetched via a REST API from the Yugioh card database and filtered locally to include only monster cards. The game mechanics, including random card selection, question logic, and scoring, were implemented in JavaScript. Key challenges included correctly handling API data, particularly parsing release dates, and ensuring a smooth user experience through asynchronous card data loading. The project was versioned using Git.",
      "duration": 0.25,
      "path": "./assets/img/project-images/yugiquiz.jpg",
      "software": ["Javascript", "Git", "REST API"],
      "downloadOnly": false,
      "github": "https://github.com/SasToepfer/Yugioh",
      "link": "https://sascha-toepfer-dev.de/yugiquiz/"
    },
    {
      name: "RLTD (2021-2022)",
      description_short_eng: "A mix of tower defense and dungeon crawler with roguelike elements, where glasses act as towers filled with drinks for unique boosts and abilities. Defeat enemy waves to unlock new rooms and face the boss.",
      description_short_de: "Ein Mix aus Tower Defense und Dungeon Crawler mit Roguelike-Elementen: Gläser dienen als Türme, gefüllt mit Getränken für einzigartige Boosts und Fähigkeiten. Besiege Gegnerwellen, um Räume freizuschalten und den Boss zu erreichen.",
      description_long_eng: "The game blends tower defense and dungeon crawler elements with a roguelike twist. Players place glasses as towers, each with unique shooting patterns and stats, and fill them with drinks to boost abilities. Combining two drinks grants a unique special ability. Defeat three waves of enemies to earn a key and unlock new rooms with tougher foes or the boss.",
      description_long_de: "Das Spiel kombiniert Tower Defense und Dungeon Crawler mit Roguelike-Elementen. Spieler platzieren Gläser als Türme, die einzigartige Angriffsmuster und Werte haben, und füllen sie mit Getränken, um Fähigkeiten zu verbessern. Die Kombination aus zwei Getränken verleiht eine spezielle Fähigkeit. Besiege drei Wellen von Gegnern, um einen Schlüssel zu erhalten und neue Räume mit stärkeren Feinden oder den Boss freizuschalten.",
      implementation_de: "Der gesamte kreative Prozess, einschließlich Game Design und 3D-Art, lag in meiner Verantwortung. Die 3D-Modelle wurden in Blender erstellt und texturiert. Darüber hinaus habe ich die Programmierung der Spielmechaniken in Unreal Engine übernommen, einschließlich der Implementierung von Tower- und Gegner-Logik, der Erstellung einzigartiger Fähigkeiten durch Getränkekombinationen und der Gestaltung des Fortschrittssystems. Neben der technischen Umsetzung war es mir wichtig, eine nahtlose Integration zwischen Gameplay und visuellem Design zu gewährleisten. Versionskontrolle und Organisation erfolgten über GitHub und Nuclino.",
      implementation_eng: "The entire creative process, including game design and 3D art, was handled solely by me. I created 3D models in Blender and textured them. Additionally, I programmed core gameplay mechanics in Unreal Engine, including the implementation of tower and enemy logic, the unique ability system based on drink combinations, and the progression system. Ensuring seamless integration between gameplay and visual design was a key focus. Version control and project organization were managed through GitHub and Nuclino.",
      duration: 18,
      path: "./assets/img/rltd_screenshot.jpg",
      software: ["Unreal Engine", "Git", "Blender", "Photoshop"],
      donwloadOnly: true,
      github: "",
      link: "https://www.dropbox.com/scl/fo/5sbsma3jgrjm2ctqd75en/AM3sOtP58EMqHvNMhHcurZQ?rlkey=zfncu96pxz3oxtdup8ijzdriz&st=pzvx2jgu&dl=0"
    },
    {
      "name": "FARS (2020-2021)",
      "description_short_eng": "A first-person arena rogue-like shooter where players fight waves of enemies and enhance their weapons with upgrade stones.",
      "description_short_de": "Ein First-Person-Arena-Roguelike-Shooter, in dem Spieler Wellen von Gegnern bekämpfen und ihre Waffen mit Upgrade-Steinen verbessern.",
      "description_long_eng": "FARS is an arena wave shooter where players battle against waves of enemies. After each wave, they choose between three upgrade stones, which can be embedded into their weapons similarly to the materia system in Final Fantasy VII. Two stones can also be combined to unlock unique abilities. The project initially started with a focus on game design and 3D art, including modeling, rigging, animation, and VFX. Over time, due to a lack of motivation among team members, I took on more programming responsibilities. Unfortunately, despite five months of development, progress was too slow to complete a prototype, and the project was eventually discontinued.",
      "description_long_de": "FARS ist ein Arena-Wave-Shooter, in dem Spieler gegen Wellen von Gegnern antreten. Nach jeder Welle wählen sie zwischen drei Upgrade-Steinen, die in ihre Waffen integriert werden können ähnlich dem Materia-System aus Final Fantasy VII. Zwei Steine können kombiniert werden, um einzigartige Fähigkeiten freizuschalten. Ursprünglich begann das Projekt mit Fokus auf Game Design und 3D-Art, darunter Modellierung, Rigging, Animation und VFX. Da die Motivation im Team mit der Zeit nachließ, übernahm ich zunehmend auch Programmieraufgaben. Trotz fünfmonatiger Entwicklung war der Fortschritt zu langsam, um einen Prototyp zu vollenden, weshalb das Projekt letztendlich eingestellt wurde.",
      "implementation_de": "Das Spiel wurde mit der Unreal Engine entwickelt. GitHub diente zur Versionskontrolle, während Nuclino zur Organisation verwendet wurde. Blender kam für 3D-Modelle und Animationen zum Einsatz. Als Projektleiter war ich verantwortlich für Game Design, 3D-Art und Animation, VFX, Sounddesign sowie Teile der Programmierung.",
      "implementation_eng": "Developed using Unreal Engine, with version control managed through GitHub and organization via Nuclino. Blender was used for 3D modeling and animation. As project lead, I handled game design, 3D art and animation, VFX, sound design, and parts of the programming.",
      "duration": 5,
      "path": "./assets/img/project-images/Fars.jpg",
      "software": ["Unreal Engine", "Blender"],
      "downloadOnly": false,
      "github": "",
      "link": ""
    },
  ];

  private daProjects = [
    { 
      name: "DA BUBBLE (2025)", 
      description_short_eng: "coming soon: Slack/Discord messenger clone", 
      description_short_de: "coming soon: Klon eines Slack/Discord informationsaustauschdienstes", 
      description_long_eng: "coming soon", 
      description_long_de: "coming soon", 
      implementation_de: "derzeitiges Projekt",
      implementation_eng: "current Project",
      duration: 0.5,
      path: "",
      software: ["Angular", "CSS", "Firebase"],
      donwloadOnly: false,
      github: "https://github.com/SasToepfer/dabubble",
      link: "" 
    },
    {
      "name": "Simple CRM (2025)",
      "description_short_eng": "A minimalistic CRM application with a dashboard, user management, and authentication using Firebase.",
      "description_short_de": "Eine minimalistische CRM-Anwendung mit Dashboard, Nutzerverwaltung und Authentifizierung über Firebase.",
      "description_long_eng": "Simple CRM is a lightweight customer relationship management application developed as a short-term project. It includes a dashboard where users can be added, edited, and managed. The authentication and user data storage are handled via Firebase, allowing for secure login, registration, and user management.",
      "description_long_de": "Simple CRM ist eine schlanke CRM-Anwendung, die als Kurzzeitprojekt entwickelt wurde. Sie bietet ein Dashboard, in dem Benutzer hinzugefügt, bearbeitet und verwaltet werden können. Die Authentifizierung und Speicherung der Nutzerdaten erfolgt über Firebase, wodurch eine sichere Anmeldung, Registrierung und Benutzerverwaltung gewährleistet wird.",
      "implementation_de": "Das Projekt wurde mit Angular und Angular Material für das UI-Design entwickelt. Die Nutzerverwaltung und Authentifizierung erfolgt über Firebase, während die Benutzerinformationen in Firestore gespeichert werden. Das Dashboard ermöglicht eine einfache Verwaltung der Nutzer mit CRUD-Funktionalitäten.",
      "implementation_eng": "The project was built using Angular with Angular Material for UI design. User management and authentication are handled via Firebase, with user data stored in Firestore. The dashboard provides an easy way to manage users with CRUD functionalities.",
      "duration": 0.5,
      "path": "./assets/img/project-images/simple-crm.jpg",
      "software": ["Angular", "Firebase", "Material Design"],
      "downloadOnly": false,
      "github": "https://github.com/SasToepfer/simple-crm",
      "link": "https://sascha-toepfer-dev.de/simplecrm"
    },
    {
      name: "Join (2025)",
      description_short_eng: "A Kanban-inspired task manager. Features real-time task synchronization, Firebase authentication, and a drag-and-drop interface for seamless task management. Built with Angular and Firebase.",
      description_short_de: "Ein Kanban-basierter Aufgabenmanager. Bietet Echtzeit-Synchronisierung, Firebase-Authentifizierung und eine Drag-and-Drop-Oberfläche für intuitives Task-Management. Erstellt mit Angular und Firebase.",
      description_long_eng: "Join is a collaborative task manager designed for organizing and tracking tasks efficiently. Users can create, assign, and move tasks across different workflow stages. The project was developed in a small team of 3 people, focusing on usability and real-time updates.",
      description_long_de: "Join ist ein kollaborativer Aufgabenmanager zur effizienten Organisation und Verfolgung von Tasks. Nutzer können Aufgaben erstellen, zuweisen und durch verschiedene Workflow-Phasen verschieben. Das Projekt wurde in einem kleinen Team aus 3 Personen mit Fokus auf Benutzerfreundlichkeit und Echtzeit-Updates entwickelt.",
      implementation_de: "Ich war verantwortlich für die Implementierung des Firebase-Datenbankzugriffs, die Benutzer-Authentifizierung und den Großteil der Kernlogik. Zudem übernahm ich eine leitende Rolle, um die Projektkoordination und technische Entscheidungen zu steuern.",
      implementation_eng: "I was responsible for implementing Firebase database access, authentication, and most of the project’s core logic. Additionally, I took on a leadership role, ensuring smooth project coordination and technical decision-making.",
      duration: 1,
      path: "./assets/img/kanbanboard.jpg",
      software: ["html", "CSS", "Angular"],
      donwloadOnly: false,
      github: "https://github.com/SasToepfer/join",
      link: "https://sascha-toepfer-dev.de/join"
    },
    {
      name: "Noitahyppy (2024)",
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
      "name": "Pokedex (2024)",
      "description_short_eng": "A web-based Pokedex application that allows users to browse, search, and view detailed information about Pokémon using data from the PokeAPI.",
      "description_short_de": "Eine webbasierte Pokedex-Anwendung, die es Benutzern ermöglicht, Pokémon zu durchsuchen, zu suchen und detaillierte Informationen über sie anzuzeigen, indem Daten von der PokeAPI verwendet werden.",
      "implementation_de": "Entwickelt mit Vanilla JavaScript, HTML und CSS. Die Anwendung ruft Daten von der PokeAPI ab und rendert dynamisch eine Galerie von Pokémon-Karten. Zu den Funktionen gehören Echtzeitsuche, detaillierte Pokémon-Ansichten mit Statistiken und ein Shiny-Toggle. Das Projekt legt Wert auf asynchrone Datenverarbeitung und DOM-Manipulation für eine reibungslose Benutzererfahrung.",
      "implementation_eng": "Developed using Vanilla JavaScript, HTML, and CSS. The application fetches data from the PokeAPI and dynamically renders a gallery of Pokémon cards. Features include real-time search, detailed Pokémon views with statistics, and a shiny toggle. The project emphasizes asynchronous data handling and DOM manipulation for a smooth user experience.",
      "duration": 0.5,
      "path": "./assets/img/project-images/pokedex.jpg",
      "software": ["JavaScript", "HTML", "CSS"],
      "downloadOnly": false,
      "github": "https://github.com/SasToepfer/pokedex",
      "link": "https://sascha-toepfer-dev.de/pokedex/"
    },

  ];


  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectByName(name: string) {
    return this.projects.find(project => project.name === name);
  }

  getStudyProjects() {
    return this.studyProjects;
  }

  getSelfEmployedProjects() {
    return this.selfemployedProjects;
  }

  getDaProjects() {
    return this.daProjects;
  }




}

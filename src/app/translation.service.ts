import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations = {
    de: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    en: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
  };

  currentLanguage: 'de' | 'en' = 'de';

 // Erlaube nur diese spezifischen Schlüssel
 private translationKeys = ['about', 'skills', 'projects', 'contact'] as const;

 switchLanguage() {
   this.currentLanguage = this.currentLanguage === 'de' ? 'en' : 'de';
 }

 getTranslation(key: keyof typeof this.translations['de']): string {
   return this.translations[this.currentLanguage][key];
 }
}

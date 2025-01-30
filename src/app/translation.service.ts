import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private languageSubject = new BehaviorSubject<boolean>(this.getSavedLanguage());
  language$ = this.languageSubject.asObservable();

  switchLanguage() {
    const newLanguage = !this.languageSubject.value;
    this.languageSubject.next(newLanguage);
    localStorage.setItem('language', newLanguage ? 'de' : 'en'); // Speichern
  }

  getCurrentLanguage(): boolean {
    return this.languageSubject.value;
  }

  private getSavedLanguage(): boolean {
    const savedLang = localStorage.getItem('language');
    return savedLang ? savedLang === 'de' : true; // Standard ist Deutsch
  }
}

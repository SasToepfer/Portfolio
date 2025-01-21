import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLanguage: 'de' | 'en' = 'de';
  private languageSubject = new BehaviorSubject<boolean>(true); 
  language$ = this.languageSubject.asObservable();

  switchLanguage() {
    const currentLanguage = this.languageSubject.value;
    this.languageSubject.next(!currentLanguage);
  }
}

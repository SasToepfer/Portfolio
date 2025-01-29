import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../translation.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isGerman: boolean = true;
  private languageSubscription!: Subscription;

  contactData = {
    name: "",
    email: "",
    message: "",
  }
  privacyAccepted: boolean = false;
  messageSent: boolean = false;
  mailTest = true;
  http = inject(HttpClient);

  constructor(private translationService: TranslationService) {
  }

  post = {
    endPoint: 'https://sascha-toepfer-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  focusInput(input: HTMLInputElement | HTMLTextAreaElement): void {
    input.focus();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.privacyAccepted = false;
            this.messageSent = true; 
            setTimeout(() => this.messageSent = false, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  ngOnInit() {
    this.languageSubscription = this.translationService.language$.subscribe((isGerman) => {
      this.isGerman = isGerman;
    })
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  sendEmail(e: Event) {
    e.preventDefault();
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    emailjs
      .sendForm('service_osdka56', 'template_dc6rhuh', e.target as HTMLFormElement, {
        publicKey: 'a4gt3T8O20ueTjatv',
      })
      .then(
        () => {
          this.isLoading = false;
          this.successMessage = 'Message sent successfully! I will get back to you soon.';
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = 'Failed to send message. Please try again later or email me directly.';
          console.error('EmailJS Error:', error.text);
        },
      );
  }
}

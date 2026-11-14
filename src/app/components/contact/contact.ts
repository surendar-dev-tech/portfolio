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
  isEmailCopied = false;
  isPhoneCopied = false;

  formData = {
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  };

  emailAddress = 'kannansurendar70@gmail.com';
  phoneNumber = '+91 9345297009';
  linkedinUrl = 'https://linkedin.com/in/surendar-kannan-844171376';
  githubUrl = 'https://github.com/surendar-dev-tech';

  applyTemplate(type: 'job' | 'consulting' | 'chat') {
    if (type === 'job') {
      this.formData.subject = 'Full-Stack / Backend Engineering Role';
      this.formData.message = 'Hi Surendar,\n\nWe came across your portfolio and are impressed with your Spring Boot and Angular work. We have an engineering opportunity we think you would be a great fit for. Let\'s schedule a conversation!';
    } else if (type === 'consulting') {
      this.formData.subject = 'Microservices & Architecture Consultation';
      this.formData.message = 'Hi Surendar,\n\nI would like to discuss an enterprise architecture and database optimization project with you. Are you available for freelance or advisory work?';
    } else if (type === 'chat') {
      this.formData.subject = 'Connecting & Technical Exchange';
      this.formData.message = 'Hi Surendar,\n\nLoved checking out your live architecture flow and projects. Would love to connect and talk about Java microservices and modern web tech!';
    }
  }

  copyEmail() {
    navigator.clipboard.writeText(this.emailAddress).then(() => {
      this.isEmailCopied = true;
      setTimeout(() => {
        this.isEmailCopied = false;
      }, 2500);
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  }

  copyPhone() {
    navigator.clipboard.writeText(this.phoneNumber).then(() => {
      this.isPhoneCopied = true;
      setTimeout(() => {
        this.isPhoneCopied = false;
      }, 2500);
    });
  }

  sendEmail(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    emailjs
      .sendForm('service_osdka56', 'template_dc6rhuh', form, {
        publicKey: 'a4gt3T8O20ueTjatv',
      })
      .then(
        () => {
          this.isLoading = false;
          this.successMessage = 'Thank you! Your message has been sent successfully. I will respond to your email shortly.';
          this.formData = { user_name: '', user_email: '', subject: '', message: '' };
          form.reset();
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = 'Notice: Form dispatch service is currently unavailable. Please click the email button above or email me directly at kannansurendar70@gmail.com.';
          console.error('EmailJS Error:', error?.text || error);
        },
      );
  }
}

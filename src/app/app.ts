import { Component, OnInit } from '@angular/core';

import { provideAnimations } from '@angular/platform-browser/animations';
import AOS from 'aos';
import { Navbar } from "./components/navbar/navbar";

import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Skills } from "./components/skills/skills";
import { Footer } from "./components/footer/footer";
import { HeroComponent } from './components/hero/hero';


@Component({
  selector: 'app-root',
  imports: [Navbar, HeroComponent, About, Projects, Contact, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  
export class App implements OnInit {
  protected title = 'surendar-portfolio';

  
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}







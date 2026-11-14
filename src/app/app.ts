import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Navbar } from "./components/navbar/navbar";
import { HeroComponent } from './components/hero/hero';
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Experience } from "./components/experience/experience";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, HeroComponent, Projects, Skills, Experience, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  
export class App implements OnInit {
  protected title = 'surendar-portfolio';

  ngOnInit() {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out'
    });
  }
}

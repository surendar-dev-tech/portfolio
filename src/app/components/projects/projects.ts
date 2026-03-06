import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ REQUIRED

@Component({
  selector: 'app-projects',
  standalone: true,               // ✅ REQUIRED for imports to work
  imports: [CommonModule],        // ✅ Needed for *ngIf
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],  // ✅ Must be styleUrls (not styleUrl)
})
export class Projects {
showImage = false;

openImage(event: Event) {
  event.stopPropagation();
  this.showImage = true;
  document.body.style.overflow = 'hidden';
}

closeImage() {
  this.showImage = false;
  document.body.style.overflow = 'auto';
}
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  // Mini interactive toggle for Card 2 (Frontend Architecture UI preview)
  previewActiveFilter: 'all' | 'active' | 'archived' = 'all';

  setPreviewFilter(filter: 'all' | 'active' | 'archived') {
    this.previewActiveFilter = filter;
  }
}

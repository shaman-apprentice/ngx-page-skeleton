import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxPageSkeletonComponent } from "@shaman-apprentice/ngx-page-skeleton";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgxPageSkeletonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected sidebarWidth = signal(320);
  protected isSidebarOpen = signal(true);
}

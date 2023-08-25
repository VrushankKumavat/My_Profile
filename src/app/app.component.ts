import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./media.css']
})
export class AppComponent {
  title = 'My_Profile';

  constructor() {}

  toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu!.classList.toggle("open");
    icon!.classList.toggle("open");
  }

}

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public tabindex = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 575) {
      document.getElementById('menu-button').setAttribute('aria-pressed', 'false');
      this.tabindex = -1;
    } else {
      this.tabindex = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu = () => {
    const state = document.getElementById('menu-button').getAttribute('aria-pressed') === 'true' ? 'false' : 'true';
    this.tabindex = state === 'true' ? 0 : -1;
    document.getElementById('menu-button').setAttribute('aria-pressed', state);
  }

}

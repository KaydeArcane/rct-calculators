import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Closes nav dropdown menu whenever navigation happens on mobile view
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart && document.getElementById('menu-button') && document.getElementById('menu-button').getAttribute('aria-pressed') === 'true') {
        setTimeout(() => {
          document.getElementById('menu-button').click();
        }, 10);
      }
    })
  }

  // Toggles the nav dropdown menu whenever a user presses the button to open/close it
  toggleMenu = () => {
    const state = document.getElementById('menu-button').getAttribute('aria-pressed') === 'true' ? 'false' : 'true';
    this.tabindex = state === 'true' ? 0 : -1;
    document.getElementById('menu-button').setAttribute('aria-pressed', state);
  }

}

import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart && document.getElementById('menu-button') && document.getElementById('menu-button').getAttribute('aria-pressed') === 'true') {
        setTimeout(() => {
          document.getElementById('menu-button').click();
        }, 10);
      }
    })
  }

  toggleMenu = () => {
    const state = document.getElementById('menu-button').getAttribute('aria-pressed') === 'true' ? 'false' : 'true';
    this.tabindex = state === 'true' ? 0 : -1;
    document.getElementById('menu-button').setAttribute('aria-pressed', state);
  }

}

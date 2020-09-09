import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private fragment;
  private routeFragmentSubscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeFragmentSubscription = this.route.fragment.subscribe(val => {
      this.fragment = val;
    })
  }

  fragmentMatch = (fragment): boolean => {
    return this.fragment === fragment;
  }
}

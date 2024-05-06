import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats-navbar',
  templateUrl: './stats-navbar.component.html',
  styleUrls: ['./stats-navbar.component.scss'],
})
export class StatsNavbarComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateToPlayerList(): void {
    this.router.navigate(['player-summary']);
  }
}

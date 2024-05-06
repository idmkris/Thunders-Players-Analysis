import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'app/_services/players.service';
import { Router } from '@angular/router';

export interface Player {
  id: number;
  name: string;
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  players: any = {};
  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playersService.getPlayerList().subscribe(
      (data) => {
        this.players = data;
      },
      (error) => {
        console.error('Error fetching player list:', error);
      }
    );
  }

  navigateToPlayer(player: Player): void {
    this.router.navigate(['player-summary/player-profile', player.id]);
  }
}

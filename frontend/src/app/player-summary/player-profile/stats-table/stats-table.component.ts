import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'app/_services/players.service';

export interface PlayerProfileStats {
  GAME: string;
  STARTER: string;
  MIN: number;
  PTS: number;
  AST: number;
  OREB: number;
  DREB: number;
  STL: number;
  BLK: number;
  TOV: number;
  DF: number;
  OF: number;
  FTM: number;
  FTA: number;
  TPM: number;
  TPA: number;
  THPM: number;
  THPA: number;
}

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss'],
})
export class StatsTableComponent implements OnInit {
  playerId: number;
  playerData: any = {};
  displayedColumns: string[] = [
    'GAME',
    'STARTER',
    'MIN',
    'PTS',
    'AST',
    'OREB',
    'DREB',
    'STL',
    'BLK',
    'TOV',
    'DF',
    'OF',
    'FTM',
    'FTA',
    'TPM',
    'TPA',
    'THPM',
    'THPA',
  ];
  dataSource: PlayerProfileStats[];
  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.playerId = +params.get('playerId');
      this.loadPlayerData();
    });
  }
  loadPlayerData(): void {
    this.playersService.getPlayerSummary(this.playerId).subscribe(
      (data) => {
        this.playerData = data.apiResponse;
        this.fillTable();
      },
      (error) => {
        console.error('Error fetching player data:', error);
      }
    );
  }

  fillTable(): void {
    let index = 0;
    this.dataSource = []; // Clear the array before populating it

    for (let game of this.playerData['games']) {
      const rowData: PlayerProfileStats = {
        GAME: game['date'],
        STARTER: game['isStarter'] ? 'YES' : 'NO',
        MIN: game['minutes'],
        PTS: game['points'],
        AST: game['assists'],
        OREB: game['offensiveRebounds'],
        DREB: game['defensiveRebounds'],
        STL: game['steals'],
        BLK: game['blocks'],
        TOV: game['turnovers'],
        DF: game['defensiveFouls'],
        OF: game['offensiveFouls'],
        FTM: game['freeThrowsMade'],
        FTA: game['freeThrowsAttempted'],
        TPM: game['twoPointersMade'],
        TPA: game['twoPointersAttempted'],
        THPM: game['threePointersMade'],
        THPA: game['threePointersAttempted'],
      };

      this.dataSource.push(rowData); // Add rowData to dataSource array
      index++;
    }
  }
}

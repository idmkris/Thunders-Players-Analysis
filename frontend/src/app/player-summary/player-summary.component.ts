import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { PlayersService } from '../_services/players.service';
import { PlayerSummary } from './player-summary.interface';

@UntilDestroy()
@Component({
  selector: 'player-summary-component',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayerSummaryComponent implements OnInit, OnDestroy {
  selectedPlayerID: number;

  playerSummary: PlayerSummary;

  constructor(
    protected route: ActivatedRoute,
    protected cdr: ChangeDetectorRef,
    protected playersService: PlayersService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}

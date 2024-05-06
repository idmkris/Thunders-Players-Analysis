import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSummaryComponent } from './player-summary.component';
import { routing } from 'app/player-summary/player-summary.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import { PlayersService } from 'app/_services/players.service';
import { StatsNavbarComponent } from './stats-navbar/stats-navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { MatTableModule } from '@angular/material/table';
import { StatsTableComponent } from './player-profile/stats-table/stats-table.component';
import { ShotsChartComponent } from './player-profile/shots-chart/shots-chart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    PlayerSummaryComponent,
    StatsNavbarComponent,
    PlayerProfileComponent,
    StatsTableComponent,
    ShotsChartComponent,
    PlayerListComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    CommonModule,
    routing,
    MatToolbarModule,
    MatCardModule,
    FlexModule,
    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,

  ],
  providers: [PlayersService],
  bootstrap: [PlayerSummaryComponent],
})
export class PlayerSummaryModule {}

import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'app/_services/players.service';

interface Date {
  value: string;
}

interface Shot {
  isMake: boolean;
  locationX: number;
  locationY: number;
}

@Component({
  selector: 'app-shots-chart',
  templateUrl: './shots-chart.component.html',
  styleUrls: ['./shots-chart.component.scss'],
})
export class ShotsChartComponent implements OnInit {
  playerId: number;
  playerData: any;
  dates: Date[] = [];
  selectedValue: string;
  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService,
    private el: ElementRef
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
        this.SerilizeData();
      },
      (error) => {
        console.error('Error fetching player data:', error);
      }
    );
  }

  SerilizeData(): void {
    for (let game of this.playerData['games']) {
      const date: Date = {
        value: game['date'],
      };
      this.dates.push(date);
    }
  }
  onDateSelectionChange(): void {  
    // Filter games based on the selected date
    const selectedGame = this.playerData['games'].find(
      (game) => game['date'] === this.selectedValue
    );
    console.log(this.playerData)
    if (selectedGame) {
      // Pass the shots of the selected game to renderShotChart
      this.renderShotChart(selectedGame['shots']);
      console.log(selectedGame['shots'])
    } else {
      // Handle the case when no game is found for the selected date
      console.error('No game found for the selected date:', this.selectedValue);
    }
  }

  renderShotChart(shots: Shot[]): void {
    d3.select(this.el.nativeElement).select('svg').remove();

    const svg = d3
      .select(this.el.nativeElement)
      .append('svg')
      .attr('width', 1000) 
      .attr('height', 700);

    const xScale = d3.scaleLinear().domain([-26, 26]).range([75, 720]); 

    const yScale = d3.scaleLinear().domain([-75, 150]).range([390, 800]);

    // Load the background image
    svg
      .append('svg:image')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 800) 
      .attr('height', 600) 
      .attr('xlink:href', 'assets/court_diagram.jpg'); 

    svg
      .selectAll('circle')
      .data(shots)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.locationX))
      .attr('cy', (d) => yScale(-6*d.locationY))
      .attr('r', 4) 
      .style('fill', (d) => (d.isMake ? 'green' : 'red'));
  }
}


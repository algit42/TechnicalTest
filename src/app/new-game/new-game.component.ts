import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayerType, HandType } from './enums';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'btc-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  showBackButton = true;
  title = 'Play chifoumi game';
  playerName = '';
  showTopPlayersNav = false;
  userSelection = HandType.None;
  cpuSelectedImage = '../assets/none.png';
  playerWins = 0;
  cpuWins = 0;
  totalPlays = 0;
  isPaperSelected = false;
  isScissorSelected = false;
  isRockSelected = false;

  constructor(private snackBar: MatSnackBar, private userService: UserService, private router: Router) { }

  selectImage(index: number) {
    this.isPaperSelected = false;
    this.isScissorSelected = false;
    this.isRockSelected = false;
    switch (index) {
      case 0:
        this.isRockSelected = true;
        break;
      case 1:
        this.isPaperSelected = true;
        break;
      case 2:
        this.isScissorSelected = true;
        break;
    }
    this.userSelection = index + 1;
    this.process();
  }

  // Process current game
  process() {
    this.totalPlays++;
    // Random CPU hand:
    const randomNumber = this.getRandomInt(1, 4);
    const cpuSelection = HandType[HandType[randomNumber]];
    // Display CPU hand image:
    this.cpuSelectedImage = '../assets/' + HandType[randomNumber].toLowerCase() + '.png';
    // Compute winner:
    const winner = this.computeWinner(cpuSelection, this.userSelection);
    // Manage info display + counts:
    switch (winner) {
      case PlayerType.None:
        this.showSnackbar('TIE !');
        break;
      case PlayerType.Cpu:
        this.showSnackbar('CPU wins !');
        this.cpuWins++;
        break;
      case PlayerType.Human:
        this.showSnackbar('You win !');
        this.playerWins++;
        break;
      default:
        this.showSnackbar('Error');
        break;
    }
    return winner;
  }

  // Compute winner
  computeWinner(cpu: HandType, player: HandType): PlayerType {
    if (cpu === player) {
      return PlayerType.None;
    }
    if (cpu === HandType.Rock && player === HandType.Scissor) {
      return PlayerType.Cpu;
    }
    if (cpu === HandType.Scissor && player === HandType.Rock) {
      return PlayerType.Human;
    }
    if (cpu < player) {
      return PlayerType.Human;
    }
    return PlayerType.Cpu;
  }

  // Get random number from min (included)
  // to max (excluded).
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // End button click to go back
  manageEndGame() {
    this.router.navigate(['/']);
  }

  // Initialization
  ngOnInit() {
    // Init user
    this.playerName = this.userService.getUserName();
    // Go to root page if playerName is not set
    if (!this.playerName)
    {
      this.router.navigate(['/']);
    }
  }

  showSnackbar(msg: string) {
    // Show snackbar
    this.snackBar.open(msg, '', {
      duration: 2000,
      panelClass: ['mat-accent']
    });
  }
}

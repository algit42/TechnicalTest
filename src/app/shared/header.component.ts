import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showBackButton: boolean;
  @Input() currentTitle: string;
  @Input() showTopPlayersNav: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

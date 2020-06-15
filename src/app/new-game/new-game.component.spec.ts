import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NewGameComponent } from './new-game.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';

import { PlayerType, HandType } from './enums';

describe('NewGameComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGameComponent ],
      providers: [ MatSnackBar],
      imports: [RouterTestingModule, OverlayModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have TIE (cpu rock - player rock)', () => {
    expect(component.computeWinner(HandType.Rock, HandType.Rock)).toBe(PlayerType.None);
  });

  it('should have Player wins (cpu rock - player paper)', () => {
    expect(component.computeWinner(HandType.Rock, HandType.Paper)).toBe(PlayerType.Human);
  });

  it('should have CPU wins (cpu rock - player scissor)', () => {
    expect(component.computeWinner(HandType.Rock, HandType.Scissor)).toBe(PlayerType.Cpu);
  });

  it('should have CPU wins (cpu paper - player rock)', () => {
    expect(component.computeWinner(HandType.Paper, HandType.Rock)).toBe(PlayerType.Cpu);
  });

  it('should have TIE (cpu paper - player paper)', () => {
    expect(component.computeWinner(HandType.Paper, HandType.Paper)).toBe(PlayerType.None);
  });

  it('should have Player wins (cpu paper - player scissor)', () => {
    expect(component.computeWinner(HandType.Paper, HandType.Scissor)).toBe(PlayerType.Human);
  });

  it('should have Player wins (cpu scissor - player rock)', () => {
    expect(component.computeWinner(HandType.Scissor, HandType.Rock)).toBe(PlayerType.Human);
  });

  it('should have CPU wins (cpu scissor - player paper)', () => {
    expect(component.computeWinner(HandType.Scissor, HandType.Paper)).toBe(PlayerType.Cpu);
  });

  it('should have TIE (cpu scissor - player scissor)', () => {
    expect(component.computeWinner(HandType.Scissor, HandType.Scissor)).toBe(PlayerType.None);
  });

});

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // Mock player name

  userName: string;

  getUserName() {
    return this.userName;
  }

  setUserName(name: string) {
    this.userName = name;
  }
}

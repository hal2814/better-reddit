import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return USERS;
  }

  getUserByName(userName: string){
    for (var i = 0; i <= USERS.length - 1; i++) {
      if (USERS[i].username === userName) {
        return USERS[i];
      }
    }
  }
}

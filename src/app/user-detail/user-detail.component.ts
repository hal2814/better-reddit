import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  userName: string = null;
  userToDisplay: User;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private userService: UserService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userName = urlParameters['username'];
    });
    this.userToDisplay = this.userService.getUserByName(this.userName);
  }
}

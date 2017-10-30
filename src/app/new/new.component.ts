import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { User } from '../user.model';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent {


submitForm(user: User, title: string, content: string, id: number) {
    let newPostToAdd: Post = new Post(user, title, content, 0, 0, id);
  }
}

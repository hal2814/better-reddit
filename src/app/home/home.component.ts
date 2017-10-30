import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  posts: Post[];
  title = 'Welcome to Better Reddit';

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

 goToDetailPage(clickedPost: Post) {
   this.router.navigate(['posts', clickedPost.id]);
 };
}

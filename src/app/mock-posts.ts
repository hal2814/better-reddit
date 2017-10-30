import { Post } from './post.model';
import { Comment } from './comment.model';
import { User } from './user.model';


export const USERS: User[] = [
 new User("Bob", 400, 3),
 new User("Bill", 500, 3),
 new User("Tom", 600, 3),
 new User("Steve", 700, 3),
 new User("Joe", 800, 3)
];

export const COMMENTS: Comment[] = [
  new Comment(USERS[0], "Wow, this really sucks", 10, 5),
  new Comment(USERS[1], "Great post, You are cool", 23, 3),
  new Comment(USERS[2], "I hate you Bob", 35, 0),
  new Comment(USERS[0], "Wow Joe, just wow...", 13, 7),
  new Comment(USERS[3], "Bad post, downvote pls", 0, 30),
  new Comment(USERS[4], "INCREDIBLE!", 1, 1),
  new Comment(USERS[0], "Ruined.", 4, 8),
];


export const POSTS: Post[] = [
 new Post(USERS[0], "Meme 1", "This is a number 1 meme.", 2, 3, 1),
 new Post(USERS[1], "Meme 2", "This is a number 2 meme.", 4, 5, 2),
 new Post(USERS[2], "Meme 3", "This is a number 3 meme.", 6, 7, 3),
 new Post(USERS[3], "Meme 4", "This is a number 4 meme.", 8, 9, 4),
 new Post(USERS[4], "Meme 5", "This is a number 5 meme.", 10, 11, 5)
];

POSTS[0].addComment(COMMENTS[0]);
POSTS[1].addComment(COMMENTS[1]);
POSTS[2].addComment(COMMENTS[2]);
POSTS[3].addComment(COMMENTS[3]);
POSTS[4].addComment(COMMENTS[4]);
POSTS[0].addComment(COMMENTS[5]);
POSTS[3].addComment(COMMENTS[6]);





// export class Comment {
//   public replies = [];
//   constructor (public user: User, public content: string, public upvote: number, public downvote: number) { }
// }

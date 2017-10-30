export class Post {
  public comments = [];
  constructor (public user: string, public title: string, public content: string, public upvote: number, public downvote: number, public id: number) { }

  addComment(newComment: Comment){
    this.comments.push(newComment);
  }
}

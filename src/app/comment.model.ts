export class Comment {
  public replies = [];
  constructor (public user: string, public content: string, public upvote: number, public downvote: number) { }
}

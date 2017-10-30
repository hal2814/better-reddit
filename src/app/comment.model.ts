import { User } from './user.model'

export class Comment {
  public replies = [];
  constructor (public user: User, public content: string, public upvote: number, public downvote: number) { }
}

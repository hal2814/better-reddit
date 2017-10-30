export class User {
  public posts = [];
  constructor (public username: string, public karma: number, public votes: number) { }
}

export class User {
  email: String;
  token: String;
  comments: Comment[];

  constructor(email: String, token: String, comments: Comment[]) {
    this.email = email;
    this.token = token;
    this.comments = comments;
  }
}

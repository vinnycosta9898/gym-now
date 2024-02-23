export class UserNotExists extends Error{
  constructor(){
    super("User Not Exists")
  }
}
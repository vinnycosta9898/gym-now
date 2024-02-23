export class ExerciseAlreadyExists extends Error{
  constructor(){
    super("Exercise Already Exists")
  }
}
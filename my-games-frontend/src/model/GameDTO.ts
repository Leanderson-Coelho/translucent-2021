class Game {
  public id: String;

  public title: String;

  public completionDate: string;

  public console: String;

  public year: string;

  public notes: String;

  public completed: Boolean;

  constructor(
    id: String,
    title: String,
    completionDate: string,
    console: String,
    year: string,
    notes: String,
    completed: Boolean,
  ) {
    this.id = id;
    this.title = title;
    this.completionDate = completionDate;
    this.console = console;
    this.year = year;
    this.notes = notes;
    this.completed = completed;
  }
}

export default Game;

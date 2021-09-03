import { DateTime } from 'luxon';

class Game {
  public id?: String;

  public title?: String;

  public completionDate?: DateTime;

  public console?: String;

  public year?: DateTime;

  public notes?: String;

  public completed?: Boolean;

  constructor(
    id: String,
    title: String,
    completionDate: DateTime,
    console: String,
    year: DateTime,
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

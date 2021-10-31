export class TodoDTO {
  id: number;
  title: string;
  done: boolean;

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.done = false;
  }
}

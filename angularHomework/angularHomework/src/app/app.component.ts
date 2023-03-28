import { Component } from '@angular/core';
import { books as data} from './data/book';
import { IBook } from './interface/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularHomework';

  books: IBook[] = data
}

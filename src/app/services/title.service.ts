import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private _title = new BehaviorSubject<string>('');

  constructor() { }

  setTitle(title: string) {
    this._title.next(title);
  }

  title() {
    return this._title.asObservable();
  }
}

import { Component, OnInit } from '@angular/core';
import * as actions from '../contador.actions';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['../../app.component.css'],
})
export class NietoComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  contador: number;

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}

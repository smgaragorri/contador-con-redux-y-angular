import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['../../app.component.css'],
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 3 }));
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }
  dividir() {
    this.store.dispatch(actions.dividir({ numero: 3 }));
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerFacesState } from './../models/players.state';
import * as playerFacesActions from './../actions/players.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<PlayerFacesState>) {
    this.playerFaces$ = this.store.select(state => state.data.playerFaces);
  }

  playerFaces$: Observable<any>;

  ngOnInit() {
    this.getPlayerFaces();
  }

  getPlayerFaces() {
    this.store.dispatch(new playerFacesActions.LoadPlayerFacesAction());
  }
}

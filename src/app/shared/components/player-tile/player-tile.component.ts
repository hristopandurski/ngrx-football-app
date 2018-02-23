import { Component, OnInit } from '@angular/core';
import { PlayerTiles } from '../../../models/players.model';
import { PlayerTilesState } from '../../../models/players.state';
import * as playerTilesActions from '../../../actions/players.action';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-player-tile',
  templateUrl: './player-tile.component.html',
  styleUrls: ['./player-tile.component.scss']
})
export class PlayerTileComponent implements OnInit {
  constructor(private store: Store<PlayerTilesState>) {
    this.playerTiles$ = this.store.select(state => state.data.playerTiles);
  }

  playerTiles$: Observable<any>;

  ngOnInit() {
    this.getPlayerTiles();
  }

  getPlayerTiles() {
    this.store.dispatch(new playerTilesActions.LoadPlayerTilesAction());
  }
}

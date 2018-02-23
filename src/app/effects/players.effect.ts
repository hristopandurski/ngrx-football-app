import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { PlayersService } from '../shared/services/players.service';
import * as playerActions from './../actions/players.action';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersEffects {
    constructor(
        private playersService: PlayersService,
        private actions$: Actions
    ) { }

    @Effect() loadPlayerTiles$ = this.actions$
        .ofType(playerActions.LOAD_PLAYER_TILES)
        .switchMap(() => this.playersService.loadPlayerTiles()
            .map(playerTiles => (new playerActions.LoadPlayerTilesSuccessAction(playerTiles)))
        );

    @Effect() loadPlayerFaces$ = this.actions$
        .ofType(playerActions.LOAD_PLAYER_FACES)
        .switchMap(() => this.playersService.loadPlayerFaces()
            .map(playerFaces => (new playerActions.LoadPlayerFacesSuccessAction(playerFaces)))
    );
}

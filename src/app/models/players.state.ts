import { PlayerTiles, PlayerFaces } from './players.model';

export interface PlayerTilesState {
    data: {
        state: Object[];
        playerTiles: PlayerTiles[];
    };
}

export interface PlayerFacesState {
    data: { playerFaces: PlayerFaces[] };
}

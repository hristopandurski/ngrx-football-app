import { PlayerTiles, PlayerFaces } from '../models';

export const LOAD_PLAYER_TILES = 'LOAD_PLAYER_TILES';
export const LOAD_PLAYER_TILES_SUCCESS = 'LOAD_PLAYER_TILES_SUCCESS';
export const LOAD_PLAYER_FACES = 'LOAD_PLAYER_FACES';
export const LOAD_PLAYER_FACES_SUCCESS = 'LOAD_PLAYER_FACES_SUCCESS';


// Start the retreival of Tiles data Action
export class LoadPlayerTilesAction {
    readonly type = LOAD_PLAYER_TILES;
    constructor() { }
};

// Send Tiles data to the store on API Success Action
export class LoadPlayerTilesSuccessAction {
    readonly type = LOAD_PLAYER_TILES_SUCCESS;
    constructor(public tilesPayload: PlayerTiles[]) { }
};

// Start the retreival of Faces data Action
export class LoadPlayerFacesAction {
    readonly type = LOAD_PLAYER_FACES;
    constructor() { }
};

// Send Faces data to the store on API Success Action
export class LoadPlayerFacesSuccessAction {
    readonly type = LOAD_PLAYER_FACES_SUCCESS;
    constructor(public facesPayload: PlayerFaces[]) { }
};

export type Action 
    = LoadPlayerTilesAction
    | LoadPlayerTilesSuccessAction
    | LoadPlayerFacesAction
    | LoadPlayerFacesSuccessAction
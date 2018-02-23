import * as playersActions from './../actions/players.action';

/**
 * Reducer is a pure function that modifies the state and return a new one based on passed actions.
 *
 * @param state Initial state (current state) that should be modified.
 * Typed with the interface of the specific substate that should be modified by this reducer.
 *
 * @param action What should be done with the current app state.
 * Typed with feature action type that is expored at the bottom of the actions.ts file for the specific feature.
 *
 * @returns New current state object
 */
export function playersReducer(state = [], action: playersActions.Action) {
    /**
     * Reducer modification based on the Action type.
     * Here we must write the code that will do the actual modification.
     */
    switch (action.type) {
        case playersActions.LOAD_PLAYER_TILES_SUCCESS: {
            return {
                ...state,
                playerTiles: action.tilesPayload
            };
        }
        case playersActions.LOAD_PLAYER_FACES_SUCCESS: {
            return {
                ...state,
                playerFaces: action.facesPayload
            };
        }

        // Default option should always be present as ALL reducers are executed even if no of their actions is triggered.
        default: {
            return state;
        }
    }
}

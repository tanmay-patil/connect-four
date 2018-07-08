// src/js/reducers/index.js
import {ACTIONTYPES} from "../constants/action-types";

import { CONST_VAR_OBJ } from "../constants/project-constants";

const initialState = {
    boardState : Array(7).fill(null).map(()=>Array(6).fill(null)),
    playerTurn: CONST_VAR_OBJ.PLAYER1,
    winner: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTIONTYPES.UPDATE_BOARD:

            let newPlayerTurn = state.playerTurn === CONST_VAR_OBJ.PLAYER1 ? CONST_VAR_OBJ.PLAYER2 : CONST_VAR_OBJ.PLAYER1;

            return { ...state, boardState: action.payload, playerTurn:newPlayerTurn };

        default:
            return state;
    }
};

export default rootReducer;
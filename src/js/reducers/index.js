// src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";

import { CONST_VAR_OBJ } from "../constants/project-constants";

const initialState = {
    boardState : new Array(7).fill(new Array(6).fill(null)),
    playerTurn: CONST_VAR_OBJ.PLAYER1,
    winner: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;
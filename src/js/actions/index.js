// src/js/actions/index.js

// It is a best pratice to wrap every action within a function. Such function is an action creator.

import {ACTIONTYPES} from "../constants/action-types";

export const updateBoard = newBoardState => ({ type: ACTIONTYPES.UPDATE_BOARD, payload: newBoardState });
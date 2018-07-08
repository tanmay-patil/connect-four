// src/js/actions/index.js

// It is a best pratice to wrap every action within a function. Such function is an action creator.

import { ADD_ARTICLE } from "../constants/action-types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
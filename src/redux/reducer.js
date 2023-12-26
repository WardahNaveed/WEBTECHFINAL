import { combineReducers } from "@reduxjs/toolkit";
import { rocketsSliceReducer } from "./slices/rockets/rockets.slice"
import { missionsSliceReducer } from "./slices/missions/missions.slice"

export const reducer = combineReducers({
  rockets: rocketsSliceReducer,
  missions: missionsSliceReducer
});

import initialState from "./initialState";
import {
  CHANGE_PROFILE_LASTNAME, CHANGE_PROFILE_NAME,
  ERROR_PROFILE_LOADING, START_PROFILE_LOADING, SUCCESS_PROFILE_LOADING
} from "../actions/profileActions";

const profileReducer = (state = initialState.profileInitialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_NAME:
      return {...state, ...{name: action.payload.input}};

    case CHANGE_PROFILE_LASTNAME:
      return {...state, ...{lastName: action.payload.input}};

    case START_PROFILE_LOADING:
      return {...state, ...{isLoading: true, isError: false}};

    case SUCCESS_PROFILE_LOADING:
      return {...state, ...{name: action.payload.name, lastName: action.payload.lastName}};

    case ERROR_PROFILE_LOADING:
      return {...state, ...{isLoading: false, isError: true}};

    default:
      return state;
  }
};

export default profileReducer;
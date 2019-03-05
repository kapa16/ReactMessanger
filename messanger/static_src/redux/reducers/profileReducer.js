import initialState from "./initialState";
import { CHANGE_PROFILE_LASTNAME, CHANGE_PROFILE_NAME } from "../actions/profileActions";

const profileReducer = (state = initialState.profileInitialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_NAME:
      return state;

    case CHANGE_PROFILE_LASTNAME:
      return state;

  }
};

export default profileReducer;
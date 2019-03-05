import {
  CHANGE_PROFILE_LASTNAME,  CHANGE_PROFILE_NAME, ERROR_PROFILE_LOADING,
  START_PROFILE_LOADING,  SUCCESS_PROFILE_LOADING
} from "../actions/profileActions";
import { getJSON, RSAA } from "redux-api-middleware";

export const changeProfileName = (input) => {
  return {
    type: CHANGE_PROFILE_NAME,
    payload: {input: input}
  }
};

export const changeProfileLastname = (input) => {
  return {
    type: CHANGE_PROFILE_LASTNAME,
    payload: {input: input}
  }
};

export const loadProfile = () => ({
  [RSAA]: {
    endpoint: '/api/profile/',
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    types: [
      START_PROFILE_LOADING,
      {
        type: SUCCESS_PROFILE_LOADING,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => json);
        },
      },
      ERROR_PROFILE_LOADING,
    ],
  }
});
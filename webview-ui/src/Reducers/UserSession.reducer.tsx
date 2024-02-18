// userProfile.reducers.js
import { UPDATE_USER_PROFILE } from '../actions/User.action';

const initialState = {
  userProfile: {},
  userComponents: {},
};

export const userProfileReducer = (state = initialState, action: { type: any; payload: { userProfileInfo: any; saveTo: any; }; }) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      console.log(action);
      const { userProfileInfo, saveTo } = action.payload;
      switch (saveTo) {
        case "profile":
          return {
            ...state,
            userProfile: userProfileInfo,
          };
        case "components":
          return {
            ...state,
            userComponents: userProfileInfo,
          };
        default:
          return state;
      }
    default:
      return state; // Add a default case to return the state unchanged if no action matches
  }
};

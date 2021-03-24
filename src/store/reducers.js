import {SHOW_SIGNUP,HIDE_SIGNUP,SHOW_SIGNIN,HIDE_SIGNIN} from './ActionTypes';

const defaultState = {
  isSignupVisible: false,
  isSigninVisible: false
};

const rootReducer = (state = defaultState, action) =>{
  switch (action.type) {
    case SHOW_SIGNUP:
    return {
      ...state,
      isSignupVisible : true,
    }
    case HIDE_SIGNUP:
      return {
        ...state,
        isSignupVisible : false,
      }
    case SHOW_SIGNIN:
        return {
          ...state,
          isSigninVisible : true,
        }
    case HIDE_SIGNIN:
          return {
            ...state,
            isSigninVisible : false,
          }
    default:
      return state;
  }
}

export default rootReducer;
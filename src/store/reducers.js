import { SHOW_SIGNUP, HIDE_SIGNUP, SHOW_SIGNIN, HIDE_SIGNIN, LOGIN_USER, LOGOUT, GAME_MODE } from './ActionTypes';

const defaultState = {
  isSignupVisible: false,
  isSigninVisible: false,
  user: {},
  savanna: {
    from: '',
  },
};

const rootReducer = (state = defaultState, action) =>{
  switch (action.type) {
    case GAME_MODE:
      return {
        ...state,
        savanna:{
          from: action.from
        }
      }
    case LOGOUT:
      return {
        ...state,
        user: {}
      }
    case LOGIN_USER:
      return {
        ...state,
        user: action.user
      }
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
import { INCREMENT, DECREMENT } from '../action/counterAction';
const INITIAL_STATE = {
  account: {
    username: '',
    role: '',
  },
  isAuthenticated: false,
};
const countUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        account: {
          username: action?.payload?.DT?.username,
          role: action?.payload?.DT?.role,
        },
        isAuthenticated: true,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countUser;

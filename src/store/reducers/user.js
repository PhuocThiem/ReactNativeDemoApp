import {handleActions} from 'redux-actions';

const initialState = {
  users: {
    status: '',
    result: null,
    error: null,
    requesting: false,
  },
  createdUser: {
    status: '',
    result: null,
    error: null,
    requesting: false,
  },
  updatedUser: {
    status: '',
    result: null,
    error: null,
    requesting: false,
  },
  deletedUser: {
    status: '',
    result: null,
    error: null,
    requesting: false,
  },
};

const userReducer = handleActions(
  {
    GET_USERS_REQUEST: state => ({
      ...state,
      users: {
        ...state.users,
        requesting: true,
        result: null,
        error: null,
        status: '',
      },
    }),
    GET_USERS_SUCCESS: (state, {payload}) => ({
      ...state,
      users: {
        ...state.users,
        requesting: false,
        result: payload,
        error: null,
        status: 'success',
      },
    }),
    GET_USERS_FAILED: (state, {error}) => ({
      ...state,
      users: {
        ...state.users,
        requesting: false,
        result: null,
        error: error,
        status: 'error',
      },
    }),
    CREATE_USER_REQUEST: state => ({
      ...state,
      createdUser: {
        ...state.createdUser,
        requesting: true,
        result: null,
        error: null,
        status: '',
      },
    }),
    CREATE_USER_SUCCESS: (state, {payload}) => ({
      ...state,
      createdUser: {
        ...state.createdUser,
        requesting: false,
        result: payload,
        error: null,
        status: 'success',
      },
    }),
    CREATE_USER_FAILED: (state, {error}) => ({
      ...state,
      createdUser: {
        ...state.createdUser,
        requesting: false,
        result: null,
        error: error,
        status: 'error',
      },
    }),
    UPDATE_USER_REQUEST: state => ({
      ...state,
      updatedUser: {
        ...state.updatedUser,
        requesting: true,
        result: null,
        error: null,
        status: '',
      },
    }),
    UPDATE_USER_SUCCESS: (state, {payload}) => ({
      ...state,
      updatedUser: {
        ...state.updatedUser,
        requesting: false,
        result: payload,
        error: null,
        status: 'success',
      },
    }),
    UPDATE_USER_FAILED: (state, {error}) => ({
      ...state,
      updatedUser: {
        ...state.updatedUser,
        requesting: false,
        result: null,
        error: error,
        status: 'error',
      },
    }),
    DELETE_USER_REQUEST: state => ({
      ...state,
      deletedUser: {
        ...state.deletedUser,
        requesting: true,
        result: null,
        error: null,
        status: '',
      },
    }),
    DELETE_USER_SUCCESS: (state, {payload}) => ({
      ...state,
      deletedUser: {
        ...state.deletedUser,
        requesting: false,
        result: payload,
        error: null,
        status: 'success',
      },
    }),
    DELETE_USER_FAILED: (state, {error}) => ({
      ...state,
      deletedUser: {
        ...state.deletedUser,
        requesting: false,
        result: null,
        error: error,
        status: 'error',
      },
    }),
  },
  initialState,
);

export default userReducer;

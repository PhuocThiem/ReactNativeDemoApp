import {createActions} from 'redux-actions';
import {serializeError} from 'serialize-error';

import userAPI from '../../api/users';

// Get list of users

const {getUsersRequest, getUsersSuccess, getUsersFailed} = createActions({
  GET_USERS_REQUEST: () => {},
  GET_USERS_SUCCESS: data => ({data}),
  GET_USERS_FAILED: error => ({error}),
});

export const getListOfUser = () => async dispatch => {
  dispatch(getUsersRequest());
  try {
    const res = await userAPI.getListOfUser();
    dispatch(getUsersSuccess(res));
  } catch (error) {
    console.log('error', error);
    dispatch(getUsersFailed(serializeError(error)));
  }
};

// Create a new user

const {createUserRequest, createUserSuccess, createUserFailed} = createActions({
  CREATE_USER_REQUEST: () => {},
  CREATE_USER_SUCCESS: data => ({data}),
  CREATE_USER_FAILED: error => ({error}),
});

export const createUser = user => async dispatch => {
  dispatch(createUserRequest());
  try {
    const res = await userAPI.createUser(user);
    dispatch(createUserSuccess(res));
  } catch (error) {
    console.log('error', error);
    dispatch(createUserFailed(serializeError(error)));
  }
};

// Update user's info

const {updateUserRequest, updateUserSuccess, updateUserFailed} = createActions({
  UPDATE_USER_REQUEST: () => {},
  UPDATE_USER_SUCCESS: data => ({data}),
  UPDATE_USER_FAILED: error => ({error}),
});

export const updateUser = user => async dispatch => {
  dispatch(updateUserRequest());
  try {
    const res = await userAPI.updateUser(user);
    dispatch(updateUserSuccess(res));
  } catch (error) {
    console.log('error', error);
    dispatch(updateUserFailed(serializeError(error)));
  }
};

// Delete user

const {deleteUserRequest, deleteUserSuccess, deleteUserFailed} = createActions({
  DELETE_USER_REQUEST: () => {},
  DELETE_USER_SUCCESS: data => ({data}),
  DELETE_USER_FAILED: error => ({error}),
});

export const deleteUser = userID => async dispatch => {
  dispatch(deleteUserRequest());
  try {
    const res = await userAPI.deleteUser({userID});
    dispatch(deleteUserSuccess(res));
  } catch (error) {
    console.log('error', error);
    dispatch(deleteUserFailed(serializeError(error)));
  }
};

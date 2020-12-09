import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from '../constants/userConstants'

const userLoginInitialState = {
  userInfo: {},
  loading: false,
  error: null
}

export const userLoginReducer = (state = userLoginInitialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: null
      }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: {}
      }
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

const userRegisterInitialState = {
  userInfo: {},
  loading: false,
  error: null
}

export const userRegisterReducer = (
  state = userRegisterInitialState,
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload
      }
    case USER_REGISTER_FAILURE:
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
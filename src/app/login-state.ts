import produce from "immer"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action<P = any> = {
  type: string;
  payload: P
};

export const actionCreator = <T>(type: string) => {
  const action = (value: T): Action<T> => ({ type, payload: value });
  action.toString = () => type;
  return action;
};

export const initialState = {
  login: '',
  password: '',
  error: '',
  submitting: false,
  authenticated: false,
  validity: false,
};

export type State = typeof initialState;

export const actions = {
  setLogin: actionCreator<string>('set-login'),
  setPassword: actionCreator<string>('set-password'),
  setValidity: actionCreator<boolean>('set-validity'),
  reset: actionCreator<void>('reset'),
  setError: actionCreator<string>('set-error'),
  clearError: actionCreator<void>('clear-error'),
  setSubmitting: actionCreator<boolean>('set-submitting'),
  setAuthenticated: actionCreator<boolean>('set-authenticated'),
};

export const reducer = (state: State | undefined, action: Action) => {
  const baseState = state || initialState;
  return produce(baseState, (draftState) => {
    switch (action.type) {
      case actions.setLogin.toString():
        draftState.login = action.payload;
        break;
      case actions.setValidity.toString():
        draftState.validity = action.payload;
        break;
      case actions.setPassword.toString():
        draftState.password = action.payload;
        break;
      case actions.reset.toString():
        draftState.password = '';
        draftState.login = '';
        draftState.validity = false;
        break;
      case actions.setError.toString():
        draftState.error = action.payload;
        break;
      case actions.clearError.toString():
        draftState.error = '';
        break;
      case actions.setSubmitting.toString():
        draftState.submitting = action.payload;
        break;
      case actions.setAuthenticated.toString():
        draftState.authenticated = action.payload;
        break;
    }
  });
};

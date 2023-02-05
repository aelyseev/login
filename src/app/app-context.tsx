import { createContext, useContext } from 'react';
import { actions, initialState, State } from './login-state';

type Context = {
  actions: {
    setLogin: (...args: Parameters<typeof actions.setLogin>) => unknown,
    setValidity: (...args: Parameters<typeof actions.setValidity>) => unknown,
    setPassword: (...args: Parameters<typeof actions.setPassword>) => unknown,
    reset: (...args: Parameters<typeof actions.reset>) => unknown,
    setError: (...args: Parameters<typeof actions.setError>) => unknown,
    setSubmitting: (...args: Parameters<typeof actions.setSubmitting>) => unknown,
    setAuthenticated: (...args: Parameters<typeof actions.setAuthenticated>) => unknown,
  },
  state: State;
};

export const AppContext = createContext<Context>({
  actions,
  state: initialState,
});

export const useAppState = () => useContext(AppContext).state;
export const useAppActions = () => useContext(AppContext).actions;

import { ReactNode, useMemo, useReducer } from 'react';
import { actions, initialState, reducer } from './login-state';
import { AppContext } from './app-context';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateActions = useMemo(
    () => ({
      setLogin: (...args: Parameters<typeof actions.setLogin>) => dispatch(actions.setLogin(...args)),
      setPassword: (...args: Parameters<typeof actions.setPassword>) => dispatch(actions.setPassword(...args)),
      setValidity: (...args: Parameters<typeof actions.setValidity>) => dispatch(actions.setValidity(...args)),
      reset: (...args: Parameters<typeof actions.reset>) => dispatch(actions.reset(...args)),
      setError: (...args: Parameters<typeof actions.setError>) => dispatch(actions.setError(...args)),
      setSubmitting: (...args: Parameters<typeof actions.setSubmitting>) => dispatch(actions.setSubmitting(...args)),
      setAuthenticated: (...args: Parameters<typeof actions.setAuthenticated>) => dispatch(actions.setAuthenticated(...args)),
    }),
    [],
  );
  const context = useMemo(() => ({state, actions: stateActions}), [state, stateActions]);
  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

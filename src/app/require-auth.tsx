import { ReactElement, ReactNode } from 'react';
import { useAppState } from './app-context';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export function RequireAuth({ children }: Props): ReactElement {
  const state = useAppState();

  if (!state.authenticated) {
    return <Navigate to="/login" />
  }

  return <>{children}</>;
}

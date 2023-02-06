import { ReactElement } from 'react';
import { useAppActions } from './app-context';
import { Button } from './button';

export function Home(): ReactElement {
  const actions = useAppActions();

  return (
    <Button
      onClick={() => actions.setAuthenticated(false)}
    >
      Logout
    </Button>
  );
}

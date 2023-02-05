import { ReactElement } from 'react';
import { useAppActions } from './app-context';

export function Home(): ReactElement {
  const actions = useAppActions();

  return (
    <button
      onClick={() => actions.setAuthenticated(false)}
      className="text-2xl transition-opacity hover:opacity-90 px-16 py-2 rounded-md bg-gradient-to-br from-cyan-500 to-blue-500 text-white"
      type="submit"
    >
      Logout
    </button>
  );
}

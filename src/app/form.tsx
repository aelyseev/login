import { ChangeEvent, FormEvent, ReactElement, useMemo, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Navigate } from 'react-router-dom';

import { Field } from './field';
import { useAppActions, useAppState } from './app-context';
import { Button } from './button';

const delay = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

export function Form(): ReactElement {
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const actions = useAppActions();
  const state = useAppState();

  const changeListener = (e: ChangeEvent<HTMLFormElement>) => {
    actions.setError('');
    setValid(e.target.checkValidity());
  };

  const clickHandler = () => {
    setSubmitted(true);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.setSubmitting(true);
    delay(1500).then(() => {
      if (state.validity) {
        actions.setError('Wrong credentials. Signing in failed');
      } else {
        actions.setAuthenticated(true);
        actions.reset();
      }
    }).finally(() => {
      actions.setSubmitting(false);
    });
  };

  const input = useMemo(
    () => (
      <Field
        value={state.login}
        required
        label="Email address"
        name="e-mail"
        type="email"
        onChange={actions.setLogin}
        hint="Please enter a valid e-mail"
      />
    ),
    [actions.setLogin, state.login],
  );

  const password = useMemo(
    () => (
      <Field
        value={state.password}
        required
        label="Password"
        name="password"
        type="password"
        minLength={4}
        onChange={actions.setPassword}
        hint="Please enter a password 4 characters at least"
      />
    ),
    [actions.setPassword, state.password],
  );

  if (state.authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <FocusLock>
      <form onChange={changeListener} ref={formRef} onSubmit={submit}>
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          {input}
          {password}
          <label className="ml-0.5 flex items-center gap-x-2">
            Wrong credentials
            <input
              checked={state.validity}
              onChange={(e) => actions.setValidity(e.target.checked)}
              className="outline-blue-500"
              type="checkbox"
              name="validity"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-3 gap-x-8 mt-8">
          <Button
            onClick={clickHandler}
            disabled={state.submitting || state.error !== '' || (state.login === '' && state.password === '')}
            type="submit"
          >
            {state.submitting ? 'Signing in...' : 'Login'}
          </Button>
          {(!valid || state.error) && submitted && (
            <div className="text-center md:text-left text-rose-500">
              {state.error || 'Please, correct your inputs to continue'}
            </div>
          )}
        </div>
      </form>
    </FocusLock>
  );
}

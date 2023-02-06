import { ReactElement } from 'react';

import styles from './app.module.css';
import { Form } from './form';
import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { RequireAuth } from './require-auth';

export const App = (): ReactElement => {
  return (
    <>
      <header className="mt-4 px-10 lg:px-0 lg:w-[600px] lg:mx-auto">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <h1 className={styles.mainHeader}>Sing in</h1>
                <div className="text-gray-600 mb-6 lg:mb-10">
                  Any valid e-mail and password will work unless <i>«Wrong credentials»</i> will be checked
                </div>
              </>
            }
          />
          <Route
            path="*"
            element={
              <RequireAuth>
                <h1 className={`${styles.mainHeader} mb-6 lg:mb-10`}>Welcome to the website</h1>
              </RequireAuth>
            }
          />
        </Routes>
      </header>
      <main className="px-10 lg:px-0 lg:w-[600px] lg:mx-auto">
        <section>
          <Routes>
            <Route path="/login" element={<Form />} />
            <Route
              path="*"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Routes>
        </section>
      </main>
      <footer className="pb-8 pt-16 text-gray-600 flex items-end justify-center w-full">
        <a target="_blank" rel="noreferrer noopener" className="underline" href="https://github.com/aelyseev/login">
          Source
        </a>
      </footer>
    </>
  );
};

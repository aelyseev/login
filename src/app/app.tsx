import { ReactElement } from 'react';

import styles from './app.module.css';
import { Form } from './form';
import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { RequireAuth } from './require-auth';

export const App = (): ReactElement => {
  return (
    <main className="my-6 px-10 md:px-0 md:w-[600px] mx-auto">
      <header>
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
      <footer className="lg:absolute lg:mt-0 mt-16 left-4 bottom-4 text-gray-600 flex justify-center w-full">
        <a target="_blank" rel="noreferrer noopener" className="underline" href="https://github.com/aelyseev/login">
          Source
        </a>
      </footer>
    </main>
  );
};

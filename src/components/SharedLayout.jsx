import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from '../sass/components/SharedLayout.module.scss';

export const SharedLayout = () => {
  // const location = useLocation();
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.top}>
            <div className={css.logo}></div>
          </div>
          <h1 className={css.title}>Animacje z uśmiechem</h1>
          <nav>
            <ul></ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

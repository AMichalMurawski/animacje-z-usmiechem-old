import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from '../sass/components/SharedLayout.module.scss';

export const SharedLayout = () => {
  // const location = useLocation();
  return (
    <div className={css.wrapper}>
      <header>
        <div className={css.container}>
          <div className={css.header}>
            <div className={css.logo}>
              <div className={css.logo__image}></div>
            </div>
            <h1 className={css.header__title}>Animacje z uśmiechem</h1>
            <nav className={css.nav}>
              <ul className={css.nav__list}>
                <li>
                  <Link className={css.nav__link} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={css.nav__link} to="/offer">
                    Oferta
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={css.container}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

import { Link } from '@tanstack/react-router';
import styles from './navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link
            className="navitem"
            to="/"
            activeProps={{
              className: `${styles.active} navitem`,
            }}
          >
            Inicio{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

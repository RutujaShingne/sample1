import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;

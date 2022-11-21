import Link from "next/link";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.brand}>CryptoNexty</p>
      <ul className={styles.navList}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/coins">
          <li>Coins</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

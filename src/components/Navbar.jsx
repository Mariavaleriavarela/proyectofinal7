import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>Inicio</Link>
        <img src="/public/1.png" alt="Logo" width={200} />
        <div className={styles.links}>
          <Link to="/products" className={styles.link}>Productos</Link>
          <Link to="/signup" className={styles.link}>Registarse</Link>
          <Link to="/login" className={styles.link}>Iniciar sesión</Link>
          <Link to="/cart" className={styles.link}>
          <Link to="/profile" className={styles.link}>Perfil</Link>
            <i className="fas fa-shopping-cart"></i>
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




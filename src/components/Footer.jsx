import styles from './footer.module.css'; // Importar estilos

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Tu Tienda. Todos los derechos reservados.</p>
      <p>Contacto: contacto@lisa.cl</p>
    </footer>
  );
};

export default Footer;


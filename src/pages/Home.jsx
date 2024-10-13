import React from 'react';
import styles from './home.module.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Artesanías Hechas con Amor</h1>
      <p className={styles.description}>
        Nos enorgullece presentar a nuestras talentosas artesanas, un grupo de señoras mayores con un amor profundo por la costura y la creación de artesanías únicas. Cada una de ellas aporta su habilidad y creatividad, convirtiendo materiales en obras de arte que reflejan tradición, dedicación y pasión.
      </p>
      
      <div className={styles.imageContainer}>
        <img src="./public/lisa.png" alt="Imagen de productos" className={styles.homeImage} />
        <img src="./public/sra1.png" alt="Imagen de productos" className={styles.homeImage} />
        <img src="./public/sra2.png" alt="Imagen de productos" className={styles.homeImage} />
      </div>

      <Footer /> {/* Asegúrate de agregar el Footer aquí */}
    </div>
  );
};

export default Home;







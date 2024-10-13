import React from 'react';
import styles from './Profile.module.css'; // Asegúrate de crear este archivo CSS.

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.card}>
        <img 
          src="/vale.jpeg"  // Cambia este enlace por la URL de tu imagen
          alt="Perfil"
          className={styles.profileImage}
        />
        <h1 className={styles.title}>Perfil de Usuario</h1>
        <p className={styles.description}>Aquí puedes ver y editar tu información de perfil.</p>
        {/* Información del perfil */}
        <div className={styles.info}>
          <p className={styles.label}>Nombre:</p>
          <p>Valeria Varela</p>
          <p className={styles.label}>Email:</p>
          <p>valeriavarelaarevalo@gmail.com</p>
        </div>
        <button className={styles.editButton}>Editar Perfil</button>
      </div>
    </div>
  );
};

export default Profile;






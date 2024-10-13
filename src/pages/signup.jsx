import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

import styles from './Signup.module.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(''); // Para manejar errores

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
      phone,
      address,
    };

    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Usuario creado:', data);
        navigate('/'); // Redirigir aquí
      } else {
        setError(data.message || 'Error en el registro.'); // Mostrar error al usuario
      }
    } catch (error) {
      setError('Error al conectar con el backend.'); // Mostrar error al usuario
      console.error('Error al conectar con el backend:', error);
    }
  };

  return (
    <div className={styles.signup}>
      <h1 className={styles.title}>Crear Cuenta</h1>
      {error && <p className={styles.error}>{error}</p>} {/* Mostrar mensaje de error */}
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Nombre</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label className={styles.label}>Teléfono</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.inputField}
            placeholder="Tu teléfono"
            required
          />
        </div>
        <div>
          <label className={styles.label}>Dirección</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={styles.inputField}
            placeholder="Tu dirección"
            required
          />
        </div>
        <div>
          <label className={styles.label}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
            placeholder="Tu contraseña"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Signup;

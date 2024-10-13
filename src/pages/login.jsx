import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'; // Importa el nuevo archivo CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    setErrorMessage('Credenciales incorrectas');
                } else {
                    setErrorMessage('Error en la autenticación');
                }
                return;
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/home');
        } catch (error) {
            setErrorMessage('Error en la conexión con el servidor');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.login}>
            <h2 className={styles.title}>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.inputField}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                required
            />
            <button type="submit" className={styles.button}>
                Iniciar sesión
            </button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </form>
    );
};

export default Login;



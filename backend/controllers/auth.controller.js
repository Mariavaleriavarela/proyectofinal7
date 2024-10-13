const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

// Signup = registro
const signUp = async (req, res) => {
    const { username, password, phone, address, role } = req.body;

    // Validar que se envíen los campos
    if (!username || !password) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, phone, address, role});
        await user.save();
        res.status(201).json({ message: 'Usuario creado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};

// Login = inicio de sesión
const logIn = async (req, res) => {
    const { username, password } = req.body;

    // Validar que se envíen los campos
    if (!username || !password) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Generar token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Autenticación exitosa', token });
    } catch (error) {
        res.status(500).json({ message: 'Error en la autenticación', error });
    }
};

module.exports = { signUp, logIn };
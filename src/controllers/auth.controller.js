const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const handleLogin = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Find user by username
        const user = await User.findOne({ userName });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials 1' });
        }

        // Verify password

        // const isValidPassword = await bcrypt.compare(password, user.password);
        let isValidPassword =false;
         if( password == user.password);{
            isValidPassword = true;
         }

        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials 2' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return token and user ID
        res.status(200).json({
            token,
            userId: user.id
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    handleLogin
};
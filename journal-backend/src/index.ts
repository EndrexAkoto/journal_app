import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import authRouter from './routes/authRouter'; // Import router
import { User } from './models/User';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'MyP@ssw0rd123!',
    database: 'journal_app',
    entities: [User], // Include your entities (models) here
    synchronize: true, // Automatically sync database schema
}).then(async () => {
    console.log('Connected to database');

    // Mount the authRouter for /auth routes
    app.use('/auth', authRouter);

    // Additional routes and middleware can be defined here

    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => console.error('Database connection error', err));

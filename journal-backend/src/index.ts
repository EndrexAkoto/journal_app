import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { User } from './models/User'; 
import authRouter from './routes/authRouter'; 

const app = express();
const PORT = 5000;

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'MyP@ssw0rd123!',
    database: 'journal_app',
    entities: [User],
    synchronize: true, }).then(async () => {
    console.log('Connected to database');
    app.use('/auth', authRouter);


    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection error', err);
    process.exit(1); 
});

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);
  const { username, password } = req.body;

  try {

    const existingUser = await userRepository.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = userRepository.create({
      username,
      password: hashedPassword,
    });

    await userRepository.save(newUser);

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id, username: newUser.username }, 'your_jwt_secret_here');

    res.status(201).json({ userId: newUser.id, username: newUser.username, token });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await userRepository.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, 'your_jwt_secret_here');

    res.json({ userId: user.id, username: user.username, token });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

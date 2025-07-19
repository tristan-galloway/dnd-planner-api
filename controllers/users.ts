import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};

export const getSingle = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }
    res.status(200).json(user);
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid user ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const requiredFields = [
    "username",
    "email",
    "password",
    "profile_img",
    "character"
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400).json({ error: `Missing required field: ${field}` });
      return;
    }
  }
  try {
    const user = new User(req.body as IUser);
    const result = await user.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }
    res.status(204).send();
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid user ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid user ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};
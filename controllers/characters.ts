import { Request, Response } from 'express';
import Character, { ICharacter } from '../models/Character';

export const getAllCharacters = async (req: Request, res: Response): Promise<void> => {
  try {
    const characters = await Character.find();
    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching characters.' });
  }
};

export const getCharacter = async (req: Request, res: Response): Promise<void> => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      res.status(404).json({ error: 'Character not found.' });
      return;
    }
    res.status(200).json(character);
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid character ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while fetching the character.' });
  }
};

export const createCharacter = async (req: Request, res: Response): Promise<void> => {
  const requiredFields = [
    "name", "race", "subrace", "class", "level",
    "background", "alignment", "experiencePoints", "playerName", "abilities"
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400).json({ error: `Missing required field: ${field}` });
      return;
    }
  }

  try {
    const character = new Character(req.body as ICharacter);
    const result = await character.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the character.' });
  }
};

export const updateCharacter = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) {
      res.status(404).json({ error: 'Character not found.' });
      return;
    }
    res.status(204).send();
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid character ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while updating the character.' });
  }
};

export const deleteCharacter = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Character.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({ error: 'Character not found.' });
      return;
    }
    res.status(200).json({ message: 'Character deleted successfully.' });
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid character ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while deleting the character.' });
  }
};

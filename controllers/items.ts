import { Request, Response } from 'express';
import Item, { IItem } from '../models/Item';

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching items.' });
  }
};

export const getSingle = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      res.status(404).json({ error: 'Item not found.' });
      return;
    }
    res.status(200).json(item);
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid item ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while fetching the item.' });
  }
};

export const createItem = async (req: Request, res: Response): Promise<void> => {
  const requiredFields = [
    "name",
    "value",
    "campain_discovered",
    "description"
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400).json({ error: `Missing required field: ${field}` });
      return;
    }
  }
  try {
    const item = new Item(req.body as IItem);
    const result = await item.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the item.' });
  }
};

export const updateItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) {
      res.status(404).json({ error: 'Item not found.' });
      return;
    }
    res.status(204).send();
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid item ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while updating the item.' });
  }
};

export const deleteItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Item.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({ error: 'Item not found.' });
      return;
    }
    res.status(200).json({ message: 'Item deleted successfully.' });
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid item ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while deleting the item.'});
    };
};
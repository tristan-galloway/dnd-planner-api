import { Request, Response } from 'express';
import Campaign, { ICampaign } from '../models/Campaigns';

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching campaigns.' });
  }
};

export const getSingle = async (req: Request, res: Response): Promise<void> => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found.' });
      return;
    }
    res.status(200).json(campaign);
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid campaign ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while fetching the campaign.' });
  }
};

export const createCampaign = async (req: Request, res: Response): Promise<void> => {
  const requiredFields = ["title", "setting", "description", "session_notes"];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400).json({ error: `Missing required field: ${field}` });
      return;
    }
  }

  try {
    const campaign = new Campaign(req.body as ICampaign);
    const result = await campaign.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the campaign.' });
  }
};

export const updateCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) {
      res.status(404).json({ error: 'Campaign not found.' });
      return;
    }
    res.status(204).send();
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid campaign ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while updating the campaign.' });
  }
};

export const deleteCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Campaign.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({ error: 'Campaign not found.' });
      return;
    }
    res.status(200).json({ message: 'Campaign deleted successfully.' });
  } catch (err: any) {
    if (err.name === 'CastError') {
      res.status(400).json({ error: 'Invalid campaign ID format.' });
      return;
    }
    res.status(500).json({ error: 'An error occurred while deleting the campaign.' });
  }
};

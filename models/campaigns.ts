import { Schema, model, Document } from 'mongoose';

export interface ICampaign extends Document {
  title: string;
  setting: string;
  description: string;
  session_notes: string[];
}

const campaignSchema = new Schema<ICampaign>({
  title: { type: String, required: true },
  setting: { type: String, required: true },
  description: { type: String, required: true },
  session_notes: { type: [String], required: true }
});

const Campaign = model<ICampaign>('Campaign', campaignSchema);

export default Campaign;

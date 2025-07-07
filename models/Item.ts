import { Schema, model, Document, Types } from 'mongoose';

export interface IItem extends Document {
  name: string;
  value: number;
  campain_discovered: Types.ObjectId;
  description: string;
}

const itemSchema = new Schema<IItem>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  campain_discovered: { type: Schema.Types.ObjectId, required: true, ref: 'Campaign' },
  description: { type: String, required: true }
});

const Item = model<IItem>('Item', itemSchema);

export default Item;
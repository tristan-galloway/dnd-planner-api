import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profile_img: string;
  character: string[];
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_img: { type: String, required: true },
  character: { type: [String], required: true }
});

const User = model<IUser>('User', userSchema);

export default User;
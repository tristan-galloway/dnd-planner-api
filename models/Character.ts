import { Schema, model, Document } from 'mongoose';

export interface ICharacter extends Document {
  name: string;
  race: string;
  subrace: string;
  class: string;
  level: number;
  background: string;
  alignment: string;
  experiencePoints: number;
  playerName: string;
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    [key: string]: number;
  };
}

const characterSchema = new Schema<ICharacter>({
  name: { type: String, required: true },
  race: { type: String, required: true },
  subrace: { type: String, required: true },
  class: { type: String, required: true },
  level: { type: Number, required: true },
  background: { type: String, required: true },
  alignment: { type: String, required: true },
  experiencePoints: { type: Number, required: true },
  playerName: { type: String, required: true },
  abilities: {
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    constitution: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    charisma: { type: Number, required: true },
  }
});

const Character = model<ICharacter>('Character', characterSchema);

export default Character;

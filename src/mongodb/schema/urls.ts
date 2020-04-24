import * as mongoose from "mongoose";

export interface URLs extends mongoose.Document {
	numOfTransitions: number;
	originalURL: string;
	shortURL: string;
}

export const urlSchema = new mongoose.Schema({
	numOfTransitions: { type: Number, required: true, default: 0 },
	originalURL: { type: String, required: true },
	shortURL: { type: String, required: true },
});

module.exports = mongoose.model("urls", urlSchema);

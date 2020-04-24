import * as mongoose from "mongoose";

const urls = require("./schema/urls");

export interface Dictionary<T> {
	[Key: string]: T;
}

export default class URLs {
	constructor() {
		/**
		 * !
		 */
		mongoose.connect("mongodb+srv://USERNAME:PASSWORD@cluster0-pu7z4.azure.mongodb.net/mangaDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
	}
	saveUrl(original: string, short: string): void {
		urls.findOneAndUpdate({ originalURL: original }, { $inc: { numOfTransitions: 1 }, shortURL: short }, { upsert: true }, (error: Error) => {
			if (error) console.log(error);
		});
	}
	async getUrl(short: string): Promise<Dictionary<string>> {
		let url: Dictionary<string>;
		await urls.find({ shortURL: short }, (error, urls) => {
			if (error) console.log(error);
			url = urls[0];
		});
		return url;
	}
}

import * as express from "express";
import * as shortid from "shortid";
import * as validUrl from "valid-url";

import URLs, { Dictionary } from "../mongodb/saveURLs";

const url = new URLs();
const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
	return res.render("index.ejs");
});

router.get("/:url", async (req: express.Request, res: express.Response) => {
	let urls: Dictionary<string> = await url.getUrl(req.params.url);

	return res.redirect(await urls.originalURL);
});

router.post("/", async (req: express.Request, res: express.Response) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	const shortId = shortid.generate();
	if (validUrl.isUri(req.body.url)) {
		url.saveUrl(req.body.url, shortId);
	} else {
		res.end(`Not a url : <br> <a href="/">http://localhost/</a>`);
	}
	return res.end(`Short link : <br> <a href=${shortId}>http://localhost/${shortId}</a>`);
});

export default router;

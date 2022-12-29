import type { VercelRequest, VercelResponse } from "@vercel/node";
// import { NextApiRequest, NextApiResponse } from 'next';
import { load } from "cheerio";

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const idx = req.query.idx;
  if (!idx) {
    res.status(500).json({ message: "no ID" });
    return;
  }

  try {
    const url = `https://m.kinolights.com/title/${idx}`;
    const resp = await fetch(url);
    const html = await resp.text();
    const $ = load(html);
    const title = $(`h3[class='title-kr']`).text();
    const poster = $(`meta[property='og:image']`).attr("content");
    const lightPercentWrap = $(`div[class='movie-light-wrap']`)
      .find("div")
      .text()
      .trim();
    const lightPercent = parseInt(lightPercentWrap, 10);

    if (!title || !poster || isNaN(lightPercent)) {
      res.status(500).json({});
      return;
    }

    res.status(200).json({ title, poster, url });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;

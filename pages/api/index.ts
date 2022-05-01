import type { VercelRequest, VercelResponse } from '@vercel/node';
// import { NextApiRequest, NextApiResponse } from 'next';
import { load } from 'cheerio';

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const idx = req.query.idx;
  if (!idx) {
    res.status(500).json({ message: 'no ID' })
    return
  }

  try {
    const resp = await fetch(`https://seo.kinolights.com/title/${idx}`);
    const html = await resp.text();
    const $ = load(html);
    const title = $(`h3[class='title-kr']`).text();
    const poster = $(`img[alt='${title}']`).attr('src');

    if (!title || !poster) {
      res.status(500).json({})
      return;
    }

    res.status(200).json({
      title,
      poster,
      url: `https://m.kinolights.com/title/${idx}`
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export default handler

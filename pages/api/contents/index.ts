import { NextApiRequest, NextApiResponse } from 'next'
import { load } from 'cheerio';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.idx) {
    res.status(500).json({ message: 'no ID' })
    return
  }

  try {
    const resp = await fetch(`https://seo.kinolights.com/title/${req.query.idx}`);
    const html = await resp.text();
    const $ = load(html);
    const title = $(`h3[class='title-kr']`).text();
    const poster = $(`img[alt='${title}']`).attr('src');
    res.status(200).json({ title, poster })
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export default handler

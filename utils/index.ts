import { load } from 'cheerio';
import { Content } from '../interfaces';

const fetchContent = async (idx: number) => {
  try {
    const resp = await fetch(`https://seo.kinolights.com/title/${idx}`);
    const html = await resp.text();
    const $ = load(html);
    const title = $(`h3[class='title-kr']`).text();
    const poster = $(`img[alt='${title}']`).attr('src');

    if (!title || !poster) return null;
    const content: Content = { title, poster, url: `https://m.kinolights.com/title/${idx}` };
    return content;
  } catch (err: any) {
    return null;
  }
}

const randomInt = (min: number, max: number) => {
  const ceil = Math.ceil(min);
  const floor = Math.floor(max);
  return Math.floor(Math.random() * (floor - ceil)) + ceil;
}

export { fetchContent, randomInt };

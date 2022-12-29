import { load } from "cheerio";
import { Content } from "../interfaces";

const fetchContent = async (idx: number) => {
  try {
    const url = `https://m.kinolights.com/title/${idx}`;
    const resp = await fetch(url);
    const html = await resp.text();
    const $ = load(html);
    const title = $(`h3[class='title-kr']`).text();
    const poster = $(`img[alt='thumbnail']`).attr("src");

    if (!title || !poster) return null;
    const content: Content = { title, poster, url };
    return content;
  } catch (err: any) {
    return null;
  }
};

const randomInt = (min: number, max: number) => {
  const ceil = Math.ceil(min);
  const floor = Math.floor(max);
  return Math.floor(Math.random() * (floor - ceil)) + ceil;
};

export { fetchContent, randomInt };

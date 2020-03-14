/* eslint-disable linebreak-style */

const Mustache = require('mustache');

const makeArticles = async (url, options) => {
  let fullUrl = url;
  if (options) {
    if (typeof options === 'string') {
      const result = `?${options}`;
      fullUrl += result;
    } else if (typeof options === 'object') {
      fullUrl += '?';
      const props = Object.keys(options);
      props.forEach((prop) => {
        fullUrl += `&${prop}=${encodeURIComponent(options[prop])}`;
      });
      fullUrl = fullUrl.replace('&', '');
    }
  }
  const responseTexts = await fetch(fullUrl);
  const texts = await responseTexts.json();
  const tmp = document.getElementById('tmp').innerHTML;
  const main = document.getElementsByClassName('page-main')[0];
  let html = '';
  const view = {};
  for (let i = 0; i < options.paras; i += 1) {
    view.src = `https://picsum.photos/200?random=${i}`;
    view.color = i % 2 === 0 ? 'article__header_violet' : 'article__header_yellow';
    view.header = i % 2 === 0 ? 'ABOUT SUPER LOGO' : 'SOME WORDS OUR CEO';
    view.text = texts[i];
    html += Mustache.render(tmp, view);
  }
  main.innerHTML = html + main.innerHTML;
};

const data = {
  type: 'meat-and-filler',
  paras: 100,
};

makeArticles('https://baconipsum.com/api/', data);

/* eslint-disable linebreak-style */
const Mustache = require('mustache');

// eslint-disable-next-line arrow-body-style
const getData = (url, params) => {
  return new Promise((res, rej) => {
    const request = new XMLHttpRequest();
    let fullUrl = url;
    if (params) {
      if (typeof params === 'string') {
        const result = `?${params}`;
        fullUrl += result;
      } else if (typeof params === 'object') {
        fullUrl += '?';
        const props = Object.keys(params);
        props.forEach((prop) => {
          fullUrl += `&${prop}=${encodeURIComponent(params[prop])}`;
        });
        fullUrl = fullUrl.replace('&', '');
      }
    }
    request.open('GET', fullUrl);
    request.onload = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          res(request.response);
        } else {
          rej(request.statusText);
        }
      }
    };
    request.send();
  });
};

const data = {
  type: 'meat-and-filler',
  paras: 100,
};

const request = getData('https://baconipsum.com/api/', data);
request.then((response) => {
  const tmp = document.getElementById('tmp').innerHTML;
  const main = document.getElementsByClassName('page-main')[0];
  let html = '';
  const view = {};
  for (let i = 0; i < data.paras; i += 1) {
    view.src = `https://picsum.photos/200?random=${i}`;
    view.color = i % 2 === 0 ? 'article__header_violet' : 'article__header_yellow';
    view.header = i % 2 === 0 ? 'ABOUT SUPER LOGO' : 'SOME WORDS OUR CEO';
    view.text = JSON.parse(response)[i];
    html += Mustache.render(tmp, view);
  }
  main.innerHTML = html + main.innerHTML;
// eslint-disable-next-line no-alert
}, (error) => alert(error));

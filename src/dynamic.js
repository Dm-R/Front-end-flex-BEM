const Mustache = require('mustache');

class RequestManager {
  constructor() {
    this.request = null;
    this.notificationText = '';
  }

  makeRequest() {
    let request = false;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      try {
        // eslint-disable-next-line no-undef
        request = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (exp) {
        // eslint-disable-next-line no-undef
        request = new ActiveXObject('Msxm12.XMLHTTP');
      }
    }
    this.request = request;
  }

  sendRequest(type, url, data, handler) {
    this.makeRequest();
    if (!this.request) {
      this.notificationText = `Can not make the request: ${url}`;
      this.showNotification();
      return false;
    }
    if (type.toLowerCase() === 'get' && data) {
      const urlWithData = url + this.handleData(data);
      this.request.open('GET', urlWithData, true);
      this.request.send();
      this.request.onload = () => {
        if (this.request.readyState === 4) {
          if (this.request.status === 200) {
            handler(this.request);
          } else {
            this.notificationText = `ERROR: ${this.request.statusText}`;
            this.showNotification();
          }
        }
      };
    }
    if (type.toLowerCase() === 'post' && data) {
      this.request.open('POST', url);
      this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      this.request.onreadystatechange = () => {
        if (this.request.readyState === 4) {
          if (this.request.status === 200) {
            handler(this.request);
          } else {
            this.notificationText = `ERROR: ${this.request.statusText}`;
            this.showNotification();
          }
        }
      };
      this.request.send(data);
    }
    return false;
  }

  showNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = 'position: absolute; top: 10%; left: 25%; width: 50%; height: 50px; background-color: red; align-text: center';
    notification.innerText = this.notification;
    document.appendChild(notification);
  }

  // eslint-disable-next-line class-methods-use-this
  handleData(data) {
    if (!data) {
      return false;
    }
    if (typeof data === 'string') {
      const result = `?${data}`;
      return result;
    } if (typeof data === 'object') {
      let formedData = '?';
      const props = Object.keys(data);
      props.forEach((prop) => {
        formedData += `&${prop}=${encodeURIComponent(data[prop])}`;
      });
      return formedData.replace('&', '');
    }
    return false;
  }
}

const data = {
  type: 'meat-and-filler',
  paras: 8,
};

const reqMng = new RequestManager();

reqMng.sendRequest('GET', 'https://baconipsum.com/api/', data, (request) => {
  const tmp = document.getElementById('tmp').innerHTML;
  const main = document.getElementsByClassName('page-main')[0];
  let html = '';
  const view = {};
  for (let i = 0; i < data.paras; i += 1) {
    view.src = `https://picsum.photos/200?random=${i}`;
    view.color = i % 2 === 0 ? 'article__header_violet' : 'article__header_yellow';
    view.header = i % 2 === 0 ? 'ABOUT SUPER LOGO' : 'SOME WORDS OUR CEO';
    view.text = JSON.parse(request.response)[i];
    html += Mustache.render(tmp, view);
  }
  main.innerHTML = html + main.innerHTML;
});

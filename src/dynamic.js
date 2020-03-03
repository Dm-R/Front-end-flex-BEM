class RequestManager {
    constructor () {
        this.request = null;
    }
    makeRequest () {
        const REQUEST = false;
        if (window.XMLHttpRequest) {
            REQUEST = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                REQUEST = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (exp) {
                REQUEST = new ActiveXObject("Msxm12.XMLHTTP");
            }
        }
        this.request = REQUEST;
    }
    sendRequest (type, url, data = false, handler) {
        this.makeRequest();
        if (!this.request) {
            this.showNotification(`Can not make the request: ${url}`);
            return false;
        }
        if (type.toLowerCase() === 'get' && data) {
            url += this.handleData(data);
            this.request.open('GET', url, true);
            this.request.onreadystatechange = () => {
                if (this.request.readyState === 4) {
                    if (this.request.status === 200) {
                        handler(this.request);
                    } else {
                        this.showNotification(`ERROR: ${this.request.statusText}`);
                    }
                }
            }
        }
        if (type.toLowerCase() === 'post' && data) {
            this.request.open("POST", url);
            this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            this.request.onreadystatechange = () => {
                if (this.request.readyState === 4) {
                    if (this.request.status === 200) {
                        handler(this.request);
                    } else {
                        this.showNotification(`ERROR: ${this.request.statusText}`);
                    }
                }
            }
        }
    }
    showNotification (message) {
        let notification  = document.createElement("div");
        notification.style.cssText = "position: absolute; top: 10%; left: 25%; width: 50%; height: 50px; background-color: red; align-text: center";
        notification.innerText = message;
        document.appendChild(notification);
    }
    handleData (data) {
        if (!data) {
            return false;
        }
        if (typeof data === 'string') {
            return data = '?' + data;
        } else if (typeof data === 'object') {
            let formedData = '?';
            for (let prop in data) {
                formedData += '&' + prop + '=' + data[prop];
            }
            return formedData.replace('&', '');
        }

    }
 }

 let data = {
    type:'meat-and-filler',
    'start-with-lorem':'1',
    paras:'3'
 }

 const reqMng = new RequestManaget();

 reqMng.sendRequest('GET', 'https://baconipsum.com/json-api/', data, (request, co))


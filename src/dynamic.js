class RequestManager {
    constructor () {
        this.request = null;
    }
    makeRequest () {
        let request = false;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
            console.log(request.status);
        } else if (window.ActiveXObject) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (exp) {
                request = new ActiveXObject("Msxm12.XMLHTTP");
            }
        }
        this.request = request;
    }
    sendRequest (type, url, data, handler) {
        this.makeRequest();
        if (!this.request) {
            this.showNotification(`Can not make the request: ${url}`);
            return false;
        }
        if (type.toLowerCase() === 'get' && data) {
            console.log(this.request.status);
            url += this.handleData(data);
            this.request.open('GET', url, true);
            console.log(url);
            console.log(this.request.status);
            this.request.send();
            this.request.onload = () => {
                if (this.request.readyState === 4) {
                    console.log(this.request.status);
                    if (this.request.status === 200) {
                        console.log(this.request.status);
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
                console.log(this.request.status);
                if (this.request.readyState === 4) {
                    if (this.request.status === 200) {
                        handler(this.request);
                    } else {
                        this.showNotification(`ERROR: ${this.request.statusText}`);
                    }
                }
            }
            this.request.send(data);
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
                formedData += '&' + prop + '=' + encodeURIComponent(data[prop]);
            }
            console.log(formedData.replace('&', ''));
            return formedData.replace('&', '');
        }

    }
 }

 let data = {
    type:'meat-and-filler',
    paras:'4'
 }

 const reqMng = new RequestManager();

 reqMng.sendRequest('GET', 'https://picsum.photos/200/300', data, (request) => {
    document.write(request.response);
 });


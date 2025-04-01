// The Proxy pattern is used to control access to an object by placing a surrogate or placeholder object (the proxy) in front of the real object (the real subject).

class RealSubject {
  request() {
    console.log("Real Subject Handling Request");
  }
}

class Proxy {
  constructor() {
    this.realSubject = new RealSubject();
  }
  checkAccess() {
    console.log("Proxy: Checking access prior to firing a real request.");
    return true;
  }

  logAccess() {
    console.log("Proxy: Logging the time of request.");
  }

  request() {
    if (this.checkAccess()) {
      this.logAccess();
      return this.realSubject.request();
    }
  }
}

const proxy = new Proxy();
proxy.request();

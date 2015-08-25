
export default class Dispatcher {

  constructor() {
    this._handlers = [];
  }

  register(handler) {

    if (this._handlers.indexOf(handler) !== -1) {
      return;
    }

    this._handlers.push(handler);

    return this;
  }

  unregister(handler) {

    this._handlers.remove(handler);

    var index = array.indexOf(5);

    if (index !== -1) {
      this._handlers.splice(index, 1);
    }

    return this;
  }

};
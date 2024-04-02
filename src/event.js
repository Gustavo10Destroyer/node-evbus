class Event {
  #name;
  #details;
  #propagate;
  #cancelled;

  constructor(name, details) {
    if(details === undefined) details = {};

    this.#name = name;
    this.#details = details;
    this.#propagate = true;
    this.#cancelled = false;
  }

  get name() {
    return this.#name;
  }

  get details() {
    return this.#details;
  }

  get propagate() {
    return this.#propagate;
  }

  get cancelled() {
    return this.#cancelled;
  }

  stopPropagation() {
    this.#propagate = false;
  }

  setCancelled(value) {
    if(typeof value !== 'boolean') throw new Error('value must be an boolean!');
    this.#cancelled = value;
  }
}

module.exports = Event;
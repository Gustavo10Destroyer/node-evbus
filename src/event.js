class Event {
	#name;
	#details;
	#propagate;

	constructor(name, details) {
		if(details === undefined) details = {};

		this.#name = name;
	    this.#details = details;
		this.#propagate = true;
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

	get cancellable() {
		return false;
	}

	stopPropagation() {
		this.#propagate = false;
	}
}

module.exports = Event;

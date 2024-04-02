const Event = require('./event');

class CancellableEvent extends Event {
	#cancelled;

	constructor(name, details) {
		super(name, details);
	}

	get cancelled() {
		return this.#cancelled;
	}

	get cancellable() {
		return true;
	}

	setCancelled(value) {
		if(typeof value !== 'boolean') throw new Error('value must be an boolean!');
		this.#cancelled = cancelled;
	}
}

module.exports = CancellableEvent;

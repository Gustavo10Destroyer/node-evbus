class EventHandler {
	#listeners;

	constructor() {
		this.#listeners = [];
	}

	addEventListener(name, handle) {
		let handler = {
			name,
		    handler: handle
		};

		let unsubscribed = false;
		handler.unsubscribe = () => {
			if(unsubscribed) return;
			let index = this.#listeners.indexOf(handler);
			this.#listeners.splice(index, 1);
			unsubscribed = true;
		};

		this.#listeners.push(handler);
		return handler;
	}

	async dispatchEvent(event) {
		if(!event.propagate) return;

		for(let listener of this.#listeners) {
			if(listener.name !== event.name) continue;

			try {
				await listener.handler(event);
			} catch {}

			if(!event.propagate) break;
		}
	}
}

module.exports = EventHandler;

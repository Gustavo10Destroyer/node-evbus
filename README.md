# node-evbus
<p>Uma biblioteca simples para a criação de um sistema de eventos simples, no estilo `eventbus`.</p>

# Exemplo
```js
const { Event, EventHandler, CancellableEvent } = require('./src/index');

class MyServer extends EventHandler {
    constructor() {
        super();

        this.addEventListener('pre-say', (event) => {
            if(event.details.author === 'test') {
                event.stopPropagation();
                event.setCancelled(true);
                return;
            }
        });

        this.addEventListener('say', (event) => {
            let { author, content } = event.details;
            console.log(`[INFO] <${author}> ${content}`);
        });
    }

    async say(content, author) {
        let event = new CancellableEvent('pre-say', {
            author,
            content
        });

        await this.dispatchEvent(event);
        if(event.cancelled) return event.cancelled;
        this.dispatchEvent(new Event('say', {
            author,
            content
        }));
        return event.cancelled;
    }
}

let server = new MyServer();
server.say('Hello world!', 'test')
    .then((cancelled) => {
        if(cancelled) return;
        console.log(`[INFO] Mensagem enviada com succeso!`);
    });
```

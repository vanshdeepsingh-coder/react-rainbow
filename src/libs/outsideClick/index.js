const privateHandleClick = Symbol('hanldeClick');
class OutsideClick {
    constructor() {
        this.containerRef = null;
        this.callback = null;
        this.listening = false;
        this[privateHandleClick] = this[privateHandleClick].bind(this);
    }

    [privateHandleClick](event) {
        if (!this.containerRef.contains(event.target)) this.callback(this, event);
    }

    startListening(containerRef, callback) {
        if (!containerRef || !callback) return;
        this.containerRef = containerRef;
        this.callback = callback;
        document.addEventListener('click', this[privateHandleClick], { capture: true });
        this.listening = true;
    }

    stopListening() {
        if (!this.listening) return;

        this.listening = false;
        document.removeEventListener('click', this[privateHandleClick], { capture: true });
        this.containerRef = null;
        this.callback = null;
    }
}

export default OutsideClick;

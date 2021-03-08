import countapi from 'countapi-js';

const PROPERTY_NAMESPACE = 'REACT_APP_COUNTER_NAMESPACE';
const PROPERTY_KEY = 'REACT_APP_COUNTER_KEY';

class Counter {
    constructor() {
        this.namespace = process.env[PROPERTY_NAMESPACE];
        this.key = process.env[PROPERTY_KEY];

        if (!this.namespace) throw new Error(`A counter namespace is required using the '${PROPERTY_NAMESPACE}' environment variable`);
        if (!this.key) throw new Error(`A counter key is required using the '${PROPERTY_KEY}' environment variable`);
    }

    get() {
        return countapi.get(this.namespace, this.key);
    }

    hit() {
        return countapi.hit(this.namespace, this.key);
    }
}

export default Counter;
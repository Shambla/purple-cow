import countapi from 'countapi-js';

// The environment property for the Counter API's namespace
const PROPERTY_NAMESPACE = 'REACT_APP_COUNTER_NAMESPACE';
// The environment property for the Counter API's key
const PROPERTY_KEY = 'REACT_APP_COUNTER_KEY';

/**
 * The Counter class acts as a simple wrapper around the Count API, capable of retrieving and incrementing counters
 */
class Counter {
    constructor() {
        this.namespace = process.env[PROPERTY_NAMESPACE];
        this.key = process.env[PROPERTY_KEY];

        if (!this.namespace) throw new Error(`A counter namespace is required using the '${PROPERTY_NAMESPACE}' environment variable`);
        if (!this.key) throw new Error(`A counter key is required using the '${PROPERTY_KEY}' environment variable`);
    }

    /**
     * Returns a Promise which will resolve to the count of the current namespace
     *
     * @returns {Promise<Result>} the Promise of the 'get' call
     */
    get() {
        return countapi.get(this.namespace, this.key);
    }

    /**
     * Returns a Promise which will resolve to the count update of the current namespace
     *
     * @returns {Promise<Result>} the Promise of the 'hit' call
     */
    hit() {
        return countapi.hit(this.namespace, this.key);
    }
}

export default Counter;
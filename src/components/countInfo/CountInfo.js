import { useEffect, useState } from 'react';

import Count from "../count/count";
import Button from "../button/Button";
import Counter from "../../stores/Counter";

import styles from './CountInfo.module.scss';

const TEASERS = [
    'We can do better.',
    'How high can it go?',
    'Is it possible to keep clicking?',
    'Smash the counter button, it really helps me out.',
]

// stateless counter store
const counter = new Counter();

/**
 * The primary content of the page, including the current count and count button
 *
 * @returns {JSX.Element}   the count information
 */
const CountInfo = () => {
    const [teaseIndex, setTeaseIndex] = useState(0);
    const [countUp, setCountUp] = useState(true);
    const [currentCount, setCurrentCount] = useState(null);

    const retrieve = () => counter.get()
        .then(result => {
            if (result.status === 404) {
                // weird that this isn't a promise failure
                // we interpret this as the namespace hasn't had a count yet
                setCurrentCount(0);
            }
            else setCurrentCount(result.value);
        });

    const onClick = () => counter.hit()
        .then(() => {
            setCountUp(false);
            setTeaseIndex((teaseIndex + 1) % TEASERS.length);
            retrieve();
        });

    // Retrieves the count only called once by using an empty dependency array
    useEffect(() => {
        retrieve();
    }, []);

    return (<main className={styles.main}>
        <section className={styles.section}>
            <h3>Can you believe it? We already have a current count of...</h3>
            {currentCount === null ? (<h1>{'...'}</h1>) : <Count count={currentCount} countUp={countUp}/>}
        </section>
        <hr className={styles.hr}/>
        <section>
            <p>{TEASERS[teaseIndex]}</p>
            <Button onClick={onClick} text="Hit the Counter" />
        </section>
    </main>);
};

export default CountInfo;
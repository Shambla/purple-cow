import { useState } from 'react';

import Count from "../count/count";
import Button from "../button/Button";
import Counter from "../stores/Counter";

import styles from './CountInfo.module.scss';

const CountInfo = () => {
    const [currentCount, setCurrentCount] = useState(null);

    // stateless counter store
    const counter = new Counter();
    const retrieve = () => counter.get().then((result) => setCurrentCount(result.value));
    const onClick = () => counter.hit().then(() => retrieve());

    retrieve();

    return (<main className={styles.main}>
        <section className={styles.section}>
            <h3>Can you believe it? We already have a current count of...</h3>
            {currentCount !== null && <Count count={currentCount}/>}
        </section>
        <hr className={styles.hr}/>
        <section>
            <p>We can do better</p>
            <Button onClick={onClick} text="Hit the Counter" />
        </section>
    </main>);
};

export default CountInfo;
import styles from './CountInfo.module.scss';
import Count from "../count/count";
import Button from "../button/Button";

const CountInfo = () => {
    return (<main className={styles.main}>
        <section className={styles.section}>
            <h3>Can you believe it? We already have a current count of...</h3>
            <Count />
        </section>
        <hr className={styles.hr}/>
        <section>
            <p>We can do better</p>
            <Button onClick={() => {}} text="Hit the Counter" />
        </section>
    </main>);
};

export default CountInfo;
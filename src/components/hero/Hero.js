import styles from './Hero.module.scss';

/**
 * An attention grabbing Hero component
 *
 * @returns {JSX.Element} the Hero component
 */
const Hero = () => {
    return <header className={styles.header}>
        <h1>Project Purple Cow</h1>
        <h3>Counting Since 2021</h3>
    </header>
}

export default Hero;
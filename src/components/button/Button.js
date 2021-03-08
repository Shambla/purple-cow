import styles from './Button.module.scss';
import PropTypes from 'prop-types';

/**
 * Standard, clickable button
 *
 * @param onClick           call back function upon clicking the button
 * @param text              the button text
 * @returns {JSX.Element}   the React button component
 */
const Button = ({ onClick, text }) => {
    return <button className={styles.button} onClick={onClick}>{text}</button>;
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
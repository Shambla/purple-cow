import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {
    return <button className={styles.button} onClick={onClick}>{text}</button>;
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

/**
 * A display of the current count, with an optional animation property
 *
 * @param count             the count to display
 * @param countUp           whether to animate the counting
 * @returns {JSX.Element}   the Count text component
 */
const Count = ({ count, countUp }) => {
    return <h1>{countUp ? <CountUp end={count} duration={3}/> : count}</h1>;
};

Count.propTypes = {
    count: PropTypes.number.isRequired,
    countUp: PropTypes.bool,
};

Count.defaultProps = {
    countUp: false
}

export default Count;
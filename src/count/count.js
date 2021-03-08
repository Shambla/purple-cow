import PropTypes from 'prop-types';

const Count = ({ count }) => {
    return <h1>{count}</h1>;
};

Count.defaultProps = {
    count: PropTypes.number.isRequired,
};

export default Count;
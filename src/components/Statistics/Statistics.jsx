import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, totalPositive }) => (
    <ul>
        <List>Good: {good}</List>
        <List>Neutral: {neutral}</List>
        <List>Bad: {bad}</List>
        <List>Total: {total}</List>
        <List>Positive feedback: {totalPositive}%</List>
    </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  totalPositive: PropTypes.number.isRequired,
};

export default Statistics;




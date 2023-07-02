import PropTypes from 'prop-types';
import { Btn, FeedbackContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackContainer>
    {options.map(option => (
      <Btn
        key={option}
            onClick={() => onLeaveFeedback(option)}
        type="button"
      >
        {option}
      </Btn>
    ))}
  </FeedbackContainer>
);


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

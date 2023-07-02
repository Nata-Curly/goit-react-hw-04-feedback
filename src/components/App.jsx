// import FeedbackRender from "./FeedbackRender/FeedbackRender";
import { Component } from "react";
import { Container } from "./App.styled";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
  }
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
    };

    countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / total);
  };
  
  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() { 
    const optoins = Object.keys(this.state);
    const { good, neutral, bad } = this.state;  
    const total = this.countTotalFeedback();
    const totalPositive = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={optoins}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
      
        <Section title="Statistics">
          {total > 0 ?
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              totalPositive={totalPositive}
            />) : (<Notification message="There is no feedback" />)}
        </Section>
      </Container>
    )
  }

}

export default App;

// const App = () => {
//   return <>
//     <FeedbackRender/>
//   </>
// }



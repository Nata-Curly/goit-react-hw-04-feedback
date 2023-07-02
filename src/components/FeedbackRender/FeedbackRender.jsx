import { Component} from 'react';
import { Container, Btn } from './FeedbackRender.styled';

class FeedbackRender extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, val) => total + val, 0);
    };

    countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / total) || 0;
    };

    render() {
        const handleClickGood = () => this.setState((prevState) => ({ good: prevState.good + 1 }));
        const handleClickNeutral = () => this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
        const handleClickBad = () => this.setState((prevState) => ({ bad: prevState.bad + 1 }));
        
        const { good, neutral, bad } = this.state;
        
        const total = this.countTotalFeedback();
        const totalPositive = this.countPositiveFeedbackPercentage();

        return <Container>
        <div className="feedback">
            <h2>Please leave your feedback</h2>
            <Btn onClick={handleClickGood}>Good</Btn>
            <Btn onClick={handleClickNeutral}>Neutral</Btn>
            <Btn onClick={handleClickBad}>Bad</Btn> 
        </div>
        <div className="stats"> 
            <h3>Statistics</h3>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {totalPositive}%</p>
        </div>
        </Container>
     }
 }

export default FeedbackRender;

// class FeedbackRender extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             good: 0,
//             neutral: 0,
//             bad: 0
//         }
//     }
//     render() {
//         return <Container>
//         <div className="feedback">
//             <h2>Please leave your feedback</h2>
//             <Btn>Good</Btn>
//             <Btn >Neutral</Btn>
//             <Btn >Bad</Btn>
//         </div>
//         <div className="stats">
//             <h3>Statistics</h3>
//             <p>Good: <span></span></p>
//             <p>Neutral: <span></span></p>
//             <p>Bad: <span></span></p>
//         </div>
//         </Container>
//      }
//  }

// export const FeedbackRender = () => {
//     const handleClick = (evt) => {
//         console.log('work', evt.target);
//     }

//     return (<Container>
//         <div className="feedback">
//             <h2>Please leave your feedback</h2>
//             <Btn onClick={handleClick}>Good</Btn>
//             <Btn >Neutral</Btn>
//             <Btn >Bad</Btn>
//         </div>
//         <div className="stats">
//             <h3>Statistics</h3>
//             <p>Good: <span></span></p>
//             <p>Neutral: <span></span></p>
//             <p>Bad: <span></span></p>
//         </div>
// </Container> )
// }


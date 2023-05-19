import { useState } from "react"

import Feedback from './components/Feedback/Feedback'
import Container from './components/Container/Container'
import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function goodClick() {
    setGood(prevState => prevState + 1);
  }

  function neutralClick() {
    setNeutral(prevState => prevState + 1);
  }

  function badClick() {
    setBad(prevState => prevState + 1);
  }

  function countTotalFeedback() {
    const sum = good + neutral + bad;
    return sum;
  }

  function countPositiveFeedbackPercentage() {
    const sum = countTotalFeedback();
    const percentage = Math.round(good / sum * 100);
    return percentage;
  }

  return (
    <div>
      <Container>
        <Section title="Please leave feedback">
          <Feedback
            goodClick={goodClick}
            neutralClick={neutralClick}
            badClick={badClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
          </Section>
      </Container>
    </div>
  )
}

export default App

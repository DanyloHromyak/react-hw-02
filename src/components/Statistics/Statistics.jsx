import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage}) {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={styles.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  )
}
export default Statistics
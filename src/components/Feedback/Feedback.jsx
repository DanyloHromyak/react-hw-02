import Button from '../Button/Button';

function Feedback({ goodClick, neutralClick, badClick }) {
  return (
    <div>
        <Button text="good" type="button" handleClick={goodClick} />
        <Button text="neutral" type="button" handleClick={neutralClick} />
        <Button text="bad" type="button" handleClick={badClick} />
    </div>
  )
}
export default Feedback
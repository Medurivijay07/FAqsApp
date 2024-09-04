// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachfaq, showAnswer, isPlusClicked} = props
  const {questionText, answerText, id} = eachfaq
  const plusOrMinusIcon = isPlusClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isPlusClicked ? 'minus' : 'plus'

  const onClickingPlus = () => {
    showAnswer(id)
  }

  return (
    <li className="eachfaq-container">
      <div className="eachfaq-item">
        <h1>{questionText}</h1>
        <button type="button" className="plus-button" onClick={onClickingPlus}>
          <img src={plusOrMinusIcon} alt={altText} />
        </button>
      </div>
      {isPlusClicked ? <hr className="line" /> : ''}
      {isPlusClicked ? <p className="answer-style">{answerText}</p> : ''}
    </li>
  )
}

export default FaqItem

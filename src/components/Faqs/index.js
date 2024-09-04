// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {visibleFaqs: {}}

  showAnswer = id => {
    this.setState(prevState => ({
      visibleFaqs: {
        ...prevState.visibleFaqs,
        [id]: !prevState.visibleFaqs[id],
      },
    }))
  }

  render() {
    const {faqsList} = this.props
    const {visibleFaqs} = this.state
    return (
      <div className="faqs-app">
        <div className="faqs-card">
          <h1 className="faqs-heading">FAQs</h1>
          <ul>
            {faqsList.map(eachfaq => (
              <FaqItem
                eachfaq={eachfaq}
                key={eachfaq.id}
                showAnswer={this.showAnswer}
                isPlusClicked={!!visibleFaqs[eachfaq.id]}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

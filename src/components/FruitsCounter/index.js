// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="app-bg-container">
        <h1 className="heading">
          Bob ate <span className="counter">{mango}</span> mangoes{' '}
          <span className="counter">{banana}</span> bananas
        </h1>
        <div className="item-container">
          <div className="img-btn-container">
            <img
              className="img"
              alt="mango"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
            <div>
              <button type="button" onClick={this.eatMango} className="btn">
                Eat Mango
              </button>
            </div>
          </div>

          <div className="img-btn-container">
            <img
              className="img"
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
            <div>
              <button type="button" onClick={this.eatBanana} className="btn">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

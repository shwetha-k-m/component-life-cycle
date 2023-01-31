import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {
    date: new Date(),
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  componentDidMount = () => {
    this.setTimer = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.setTimer)
  }

  render() {
    const {date} = this.state

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock

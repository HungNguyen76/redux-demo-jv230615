import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
  render() {
    const { face, rolling } = this.props
    return (
      <div>
        <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die ${rolling && 'Die-shaking'}`}/>
      </div>
    )
  }
}

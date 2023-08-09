import React from 'react'
import './Contacts.scss'
import github from '../../assets/github.png'
import telegram from '../../assets/telegram.png'

const Contacts = () => {
  return (
    <div className="Contacts">
        <div className="Contacts_main">
          <a href='https://t.me/sleepcc' target="_blank">
            <img src={telegram} alt="telegram"/>
          </a>
          <a href='https://github.com/SultanKent' target="_blank">
            <img src={github} alt="github" />
          </a>
        </div>
    </div>
  )
}

export default Contacts
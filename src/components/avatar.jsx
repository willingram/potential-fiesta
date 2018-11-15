import React from 'react'
import './avatar.css'
import './shared.css'

const Avatar = ({ face }) => (
  <div className="Avatar clickable opaque centered shadows circled">
    <div className="mask">
      <img src={face} alt="Face" />
    </div>
  </div>
)

export default Avatar

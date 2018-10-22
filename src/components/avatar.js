import React from 'react'
import './avatar.css'

const Avatar = ({ face }) => (
  <div className="Avatar pulse">
    <img src={face} alt="Face" />
  </div>
)

export default Avatar

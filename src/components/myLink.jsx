import React from 'react'
import './myLink.css'
import './shared.css'

export default ({ link, children }) => (
  <a
    className="MyLink clickable opaque shadows circled contents-centered"
    href={link}
  >
    {children}
  </a>
)

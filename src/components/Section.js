import React from 'react'
import "../styles/Section.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section = (props) => {
    const id = props.id;
    const title = props.title;
    const icon = props.icon;
  return (
    <div id={id}className="section">
      <FontAwesomeIcon icon={icon} />
      <p>{title}</p>
    </div>
  )
}

export default Section
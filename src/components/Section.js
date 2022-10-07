import React from 'react'
import "../styles/Section.css";

const Section = (props) => {
    const id = props.id;
    const title = props.title;
  return (
    <div id={id}className="flip">
        <a href="/#">
            <div className="front">{title}</div>
            <div className="back">{title}</div>
        </a>
    </div>
  )
}

export default Section
import React, { Component } from 'react';
import "../styles/Section.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Section extends Component {
  
  render(){
      const id = this.props.id;
      const title = this.props.title;
      const icon = this.props.icon;
      return (
        <div id={id}className="section">
          <FontAwesomeIcon icon={icon} />
          <p>{title}</p>
        </div>
      )
    }
}

export default Section
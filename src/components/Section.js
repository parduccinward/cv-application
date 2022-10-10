import React, { Component } from 'react';
import "../styles/Section.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Section extends Component {
  constructor(props){
    super(props);
    this.state = {
      active:this.props.active
    }
  }
  render(){
      const {id, title, icon, onClick} = this.props;
      let activeStyle;
      if(!this.state.active){
        activeStyle = {
          cursor: "auto",
          opacity: 0.25
        };
      }else{
        activeStyle = {
          cursor: "pointer",
          opacity: 1
        };
      }
      return (
        <div id={id}className="section" style={activeStyle} onClick={onClick}>
          <FontAwesomeIcon icon={icon}/>
          <p>{title}</p>
        </div>
      )
    }
}

export default Section
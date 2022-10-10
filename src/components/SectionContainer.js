import React, { Component } from 'react';
import Section from "./Section";
import "../styles/SectionContainer.css";
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons'
import Modal from "./Modal";

class SectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false
    }

  }

  onModalClose = () => {
    this.setState({show:false});
  }

  onSectionClick = () => {
    this.setState({show:true});
  }
  render(){
    const {show = false} = this.state;
    return (
      <div className="section-container">
          <Section title="Personal information"id="personal-info" icon={fa1} active={true} onClick={this.onSectionClick}/>
          <Section title="Educational experience"id="educational-experience" icon={fa2} active={false}/>
          <Section title="Practical experience"id="practical-experience" icon={fa3} active={false}/>
          {
            show ? (
              <Modal show={show} onClose={this.onModalClose}/>
            ) : null
          }
      </div>
    )
  }
}

export default SectionContainer
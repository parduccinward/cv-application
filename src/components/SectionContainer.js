import React, { Component } from 'react';
import Section from "./Section";
import "../styles/SectionContainer.css";
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons'

class SectionContainer extends Component {
  render(){
    return (
      <div className="section-container">
          <Section title="Personal information"id="personal-info" icon={fa1} active={true}/>
          <Section title="Educational experience"id="educational-experience" icon={fa2} active={false}/>
          <Section title="Practical experience"id="practical-experience" icon={fa3} active={false}/>
      </div>
    )
  }
}

export default SectionContainer
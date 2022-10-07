import React from 'react'
import Section from "./Section";
import "../styles/SectionContainer.css";

const SectionContainer = () => {
  return (
    <div className="section-container">
        <Section title="1"id="personal-info"/>
        <Section title="2"id="educational-experience"/>
        <Section title="3"id="practical-experience"/>
    </div>
  )
}

export default SectionContainer
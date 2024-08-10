import React from 'react';

import './styles.scss';

const Slate = () => {
  let slateLogo = require('./images/Slate_Logo.png');
  let slateOverview = require('./images/Slate_Overview.png');
  let sduiPlatform = require('./images/SDUI_Platform.png');
  let notionDatabase = require('./images/Notion_Database.png');

  return (
    <div className='cs-container'>
      <div className='cs-info'>
        <p className='cs-intro'>Leading a multi-displinary team to rebuild a multi-platform, multi-brand Design System from the ground up.</p>
        <div className='cs-role'>
          <p><u>My role:</u> Lead Designer and Product Owner</p>
        </div>
        <div className='cs-image'>
          <img src={slateLogo} />
          <span>Brand new branding and company kick-off for our new Design System to get everyone excited about it, using it and most importantly, contributing into it.</span>
        </div>
        <p>Over the course of just 8 months, our cross functional team have delivered a multi-platform, multi-branded Design System available for consumption across the business with over 90 components, ranging from the basic Buttons, to more complex and bespoke components for our core ClearScore product. The components have been designed and built in accordance with our product refresh slated for release towards the end of 2024, whilst also taking into account best-in-class accessiility standards, and supporting multiple brands across the business.</p>
        <div className='cs-numbers'>
          <div className='cs-number-info'>
            <span>3</span>
            <p>Platforms</p>
          </div>
          <div className='cs-number-info'>
            <span>4</span>
            <p>Brands</p>
          </div>
          <div className='cs-number-info'>
            <span>94</span>
            <p>Components</p>
          </div>
          <div className='cs-number-info'>
            <span>8</span>
            <p>Months</p>
          </div>
        </div>
        <p>The ClearScore Slate Design System has been completely rethought from the ground up, taking the learnings from our hugely successful first Design System, and applying it across not just Design & Web, but also our native iOS and Android applications too. <br/><br/>
        Slate incorporates a vast array of design tokens in order to give fine-control over the branding and appearance of the components for each of our brands, allowing full styling flexibility, whilst providing a standard and recognisable design patterns across our products and websites.</p>
        <div className='cs-image'>
          <img src={slateOverview} />
          <span>The new design system utilises Design Tokens, Style Dictionary and Figma's native 'variables' to easily switch between the different brands and themes we have built the components around.</span>
        </div>
        <p>Alongside our new Design System, I have also helped on leading a brand new initiative for Server-Driven UI. By aligning on the schemas across our platforms, we have managed to build a bespoke platform for creating UIs across our products from one source-of-truth, allowing us to launch and release completely new pages and UIs in our products without the need for a native release.<br /><br/>
        This frees up time for our client engineers to focus on building world-class UI and interaction, and allows our global markets to iterate and build new features without the need for client support – something which either took months before, or was actually impossible.</p>
        <div className='cs-image'>
          <img src={sduiPlatform} />
          <span>Creating a standardised schema for our components across platforms allows us to utilise a bespoke Server-Driven UI platform.</span>
        </div>
        <div className='cs-numbers'>
          <div className='cs-number-info'>
            <span>1hr</span>
            <p>Time to create and release a brand new screen</p>
          </div>
          <div className='cs-number-info'>
            <span>59</span>
            <p>Contributions by immediate squad</p>
          </div>
          <div className='cs-number-info'>
            <span>35</span>
            <p>Contributions by other squads</p>
          </div>
        </div>
        <p>Along with a fantastic team of engineers across all three platforms, and a Product Manager, I have not only delivered the designs and vision for the new Design System, but I have written documention, scoped delivery, project managed, delved into the impact and cost efficiencies of the system, rolled it out across a company of over 400 employees, written component schemas, helped with the styling in CSS of various components, onboarded designers and engineers into contributing back into the system, as well as use it, and presented successes and demonstrations to senior stakeholders across the group business.</p>
        <div className='cs-image'>
          <img src={notionDatabase} />
          <span>Keeping track of status, impact and documentation of all components to ensure smooth delivery and accountability.</span>
        </div>
        <div className='cs-numbers'>
          <div className='cs-number-info'>
            <span>£600k+</span>
            <p>Estimated gross savings since inception</p>
          </div>
          <div className='cs-number-info'>
            <span>£1.5m+</span>
            <p>Estimated gross savings after 1 year</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slate;
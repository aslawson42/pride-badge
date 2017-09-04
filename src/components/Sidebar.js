import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div id="pb-sidebar" className="sidebar">
        <h2>This is the sidebar.</h2>
        <p>Logo</p>
        <ul>
          <li>Sexuality</li>
            <ul>
              {this.props.sexualityList.map(function(sexualityListValue){
                return <li>{sexualityListValue}</li>;
              })}
            </ul>
          <li>Romantic</li>
            <ul>
              {this.props.romanticList.map(function(romanticListValue){
                return <li>{romanticListValue}</li>;
              })}
            </ul>
          <li>Gender</li>
            <ul>
              {this.props.genderList.map(function(genderListValue){
                return <li>{genderListValue}</li>;
              })}
            </ul>
          <li>Preferred Pronouns</li>
            <ul>
              {this.props.pronounList.map(function(pronounListValue){
                return <li>{pronounListValue}</li>;
              })}
            </ul>
          <li>Interests</li>
            <ul>
              {this.props.interestList.map(function(interestListValue){
                return <li>{interestListValue}</li>;
              })}
            </ul>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

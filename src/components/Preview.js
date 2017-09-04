import React from 'react';
import './Preview.css';

class Preview extends React.Component {
  render() {
    return (
      <div id="pb-preview" className="preview">
        <h2>This is the preview.</h2>
        <div className="badge-area">This is the badge area.</div>
      </div>
    );
  }
}

export default Preview;

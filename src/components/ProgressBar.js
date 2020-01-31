import React from 'react';
import PropTypes from 'prop-types';
import './Progess-bar.css'

const ProgressBar = ({ percentage, style }) => (
  <>
    <div className="ProgressBarContainer" style={{...style}}>
      <div 
        className="ProgressBar" 
        style={{ width: `${percentage}%`}}
      >
      </div>
    </div>
    <span className="PercentageText">
      {percentage}%
    </span>
  </>
)

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  style: PropTypes.object,
}

export default ProgressBar
import React from 'react'
import GithubIcon from '../images/3x/logo-github@3x.png';
import MobileIcon from '../images/3x/smartphone@3x.png';
import DesktopIcon from '../images/3x/pc-monitor@3x.png';
const ThumbnailButtonGroup = () => {
  return (
    <div className="thumbnail-icon-group">
        <img className="thumbnail-icon-button" src={MobileIcon} />
        <img className="thumbnail-icon-button" src={DesktopIcon} />
        <img className="thumbnail-icon-button" src={GithubIcon} />
      
    </div>
  )
}

export default ThumbnailButtonGroup;

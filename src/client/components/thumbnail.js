import React, { Component } from 'react';
import ThumbnailImage from '../images/2x/img-stack@2x.png';

const Thumbnail = (props) => {
    console.log('hello props');
    console.log(props);
    const { items } = props;
    const check = items.length > 1;
//item.imageData.ThumbnailImage
    return (
        <div className="dashboard">
            {(items.map((item) => 
                    <fragment className="thumbnail-item">
                        <img className="thumbnail-image" key={item.title} src={ThumbnailImage} />
                        <div className="thumbnail-content" key={item.title}>{item.title}</div>
                    </fragment>
            ))}
            </div> 
    )
}

export default Thumbnail;

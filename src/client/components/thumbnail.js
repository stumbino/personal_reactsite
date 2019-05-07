import React, { Component } from 'react';
import ThumbnailImage from '../images/2x/img-stack@2x.png';

const Thumbnail = (props) => {
    const { items } = props;
    const check = items.length > 1;
    let count = 0;
//item.imageData.ThumbnailImage
    return (
        <div className="dashboard">
            {(check && items.map((item) =>{ 
                count++;
                if(count <= 8){
                   return (<div className="thumbnail-item">
                        <img className="thumbnail-image" key={count} src={item.imageData} />
                        <div className="thumbnail-content" key={item.title}>{item.title}</div>
                    </div>
                   );
                }}
            ))}
            </div> 
    )
}

export default Thumbnail;

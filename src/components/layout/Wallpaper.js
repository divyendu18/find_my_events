import React from 'react';
import Wallpaper from './wallpaper.jpg';

export default () => {
    return (
        <div className="img-responsive">
            <img src={Wallpaper} alt="Loading..." style={{
                width:'100%',margin: 'auto' ,display:'block'
            }}/>
        </div>
    )
}

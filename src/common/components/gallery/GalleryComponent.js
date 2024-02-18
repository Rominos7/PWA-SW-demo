import React from 'react';
import { imgCollection } from '../../../utils/galleryUtils';

import { GALLERY_LABEL, ALT_TEXT } from '../../../const/gallery';

export const GalleryContainer = () => {
    return (
        <div className='gallery-component'>
            <div className='gallery-label'>{GALLERY_LABEL}</div>
            <div className='image-container'>
                {imgCollection.map((image, index) => {
                    return (
                        <img src={image} alt={ALT_TEXT} key={index}/>
                    )
                })}
            </div>
        </div>
        
    )
}

export default GalleryContainer;

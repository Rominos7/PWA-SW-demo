import React from 'react';
import GalleryContainer from './gallery/GalleryComponent';
import DataComponent from './data-component/DataComponent';

export const AppContainer = () => {
    return (
        <div className='main-container'>
            <GalleryContainer />
            <DataComponent />
        </div>
    )
}

export default AppContainer;

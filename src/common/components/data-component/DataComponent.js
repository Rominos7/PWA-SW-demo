import React from 'react';
import DataItem from '../data-item/DataItem';

import { DATA_COMPONENT_LABEL, urlHashMap } from '../../../const/data';

export const DataComponent = () => {
    return(
        <div className='data-component'>
            <div className='data-component-label'>{DATA_COMPONENT_LABEL}</div>
            <div className='data-container'>
                {Object.entries(urlHashMap).map((item, index) => {
                    const [key, value] = item;
                    return(
                        <DataItem label={key} url={value} key={index} />
                    )
                })}
            </div>
        </div>
    )
};

export default DataComponent;

import React, { useState } from 'react';
import { DEFAULT_FORM_DATA, BUTTON_TEXT } from '../../../const/general';

import { getDataFromNetwork } from '../../../utils/networkUtils';

const {GET_DATA, RESET_DATA} = BUTTON_TEXT;

export const DataItem = ({ label, url }) => {
    const [formData, SetFormData] = useState(DEFAULT_FORM_DATA);

    const setData = async () => {
        const networkData = await getDataFromNetwork(url);
        SetFormData(networkData);
    }

    const resetData = () => SetFormData(DEFAULT_FORM_DATA);

    const displayData = JSON.stringify(formData, null, 2);

    return(
        <div className='data-item'>
            <div className='label'>{label}</div>
            <pre className='content-container'>{displayData}</pre>
            <div className='button-container'>
                <button type='button' onClick={setData}>{GET_DATA}</button>
                <button type='button' onClick={resetData}>{RESET_DATA}</button>
            </div>
        </div>
    )
};

export default DataItem;

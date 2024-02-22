import React, { useState } from 'react';
import { DEFAULT_FORM_DATA, ERROR_FORM_DATA, BUTTON_TEXT } from '../../../const/general';

import { getDataFromNetwork } from '../../../utils/networkUtils';
import { errorMessageLog } from '../../../utils/messageLog';

const {GET_DATA, RESET_DATA} = BUTTON_TEXT;

export const DataItem = ({ label, url }) => {
    const [formData, SetFormData] = useState(DEFAULT_FORM_DATA);

    const setData = async () => {
        try {
            const networkData = await getDataFromNetwork(url);
            SetFormData(networkData);
        } catch (error) {
            errorMessageLog(error);
            SetFormData(ERROR_FORM_DATA);
        }
        
    }

    const resetData = () => SetFormData(DEFAULT_FORM_DATA);

    const displayData = JSON.stringify(formData, null, 2);

    return(
        <div className='data-item'>
            <div className='label'>{label}</div>
            <pre className='content-container'>{displayData}</pre>
            <div className='button-container'>
                <button type='button' className='primary' onClick={setData}>{GET_DATA}</button>
                <button type='button' className='secondary' onClick={resetData}>{RESET_DATA}</button>
            </div>
        </div>
    )
};

export default DataItem;

import React, { createContext, useEffect, useContext, useMemo, useState } from "react";
import { Workbox } from "workbox-window";
import { messageLog, errorMessageLog } from '../../utils/messageLog';

const STATUS_SUCCESS = "success";
const STATUS_FAILURE = "failure";
const NEUTRAL_STATUS = 'netural';

const SWRegistration = createContext();
SWRegistration.displayName = 'SWRegistration';

const SWRegistrationProvider  = ({ children }) => {
    const [status, setStatus] = useState(NEUTRAL_STATUS);

    const registerSW = async () => {
        // for local setup sw needs to be generated via npm run buil and placed in public folder
        // or use 'serve -s build' in order to serve content from build folder
        const wb = new Workbox('./service-worker.js');
        // show message in console for successfull SW activation
        window.addEventListener('activated', () => {
            messageLog('service worker was activated');
        });

        // Pure example that we can put diff sequences when SW takes controll over the page
        window.addEventListener('controlling', () => {
            window.location.reload();
        });

        // register SW
        try {
            await wb.register();
            setStatus(STATUS_SUCCESS);
        } catch(error) {
            errorMessageLog(`SW registration was a failure:${error}`);
            setStatus(STATUS_FAILURE);
        }
    }

    useEffect(() => {
        if('serviceWorker' in navigator) {
            registerSW();
        } else {
            errorMessageLog('Browser does not support service worker functionality');
        }
    }, []);

    const contextValue = useMemo(() => ({
        registationStatus: status,
    }), [status])

    return <SWRegistration.Provider value={contextValue}>{children}</SWRegistration.Provider>
};

export const SWRegistrationContext = () => useContext(SWRegistration);

export default SWRegistrationProvider;

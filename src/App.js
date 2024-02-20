import './App.css';
import './common/styles/_main.scss';

import AppContainer from './common/components/AppContainer';
import SWRegistrationProvider from './common/context/SWRegistrationProvider';

function App() {
  return (
    <SWRegistrationProvider>
      <AppContainer />
    </SWRegistrationProvider>
  );
}

export default App;

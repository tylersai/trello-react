import React, { useState } from 'react';
import './App.css';
import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';
import Wrapper from './component/Wrapper';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <NavTop isLoading={isLoading} />
      <NavBottom />
      <Wrapper setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;

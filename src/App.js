import React from 'react';

import GlobalStyle from './styles/global';

import ButtonNormal from './components/ButtonNormal';
import OutlineButton from './components/OutlineButtons';

function App() {
  return (
    <>
      <GlobalStyle />

      <h1>Normal buttons</h1>
      <ButtonNormal />
      <h1>Outline buttons</h1>
      <OutlineButton />
    </>
  );
}

export default App;

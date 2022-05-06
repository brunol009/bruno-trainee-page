import React from 'react';
import {ContextProvider} from "./Context"
import {Route, Routes} from 'react-router-dom';
import {
  ChakraProvider

} from '@chakra-ui/react';
import theme from "./theme"
import {BrowserRouter as Router} from 'react-router-dom';

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import Bar from "./Components/Bar"
import Batcave from './Components/Batcave';
import Characters from './Components/Characters';
import CharacterDescription from './Components/CharacterDescription';
import MiniGame from './Components/MiniGame';
import Footer from './Components/Footer'


function App() {
  return (
      
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <Router>
          <Bar />
          <Routes>
            <Route exact path="" element={<Batcave/>} />
            <Route exact path="Allies" element={<Characters/>} />
            <Route path="Allies/:id" element={<CharacterDescription/>} />
            <Route exact path="Villans" element={<Characters/>} />
            <Route path="Villans/:id" element={<CharacterDescription/>} />
            <Route exact path="MiniGame" element={<MiniGame/>} />
          </Routes>
          <Footer/>
        </Router>
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;

import React from 'react';


import {HashRouter, Route} from "react-router-dom";

import Home from "./components/main_page/Home";



function App() {
  return (
    <div className="App">
<HashRouter>
    <Route exact path='/' component={Home}/>
</HashRouter>
    </div>
  );
}

export default App;

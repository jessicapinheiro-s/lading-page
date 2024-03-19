import React from 'react';
import HeaderContainer from './components/header';
import ContainerImg from './components/cotainer-img'
import WorkManagmente from "./components/work-managmente";
import AsExtesion from "./components/asextension";
import Custume from "./components/custome";
import Plans from "./components/plans";
import MessageBanner from './components/message-banner';
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <ContainerImg/>
      <WorkManagmente/>
      <AsExtesion/>
      <Custume/>
      <Plans/>
      <MessageBanner/>
    </div>
  );
}

export default App;

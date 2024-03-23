import React from 'react';
import HeaderContainer from './components/header';
import Plans from "./components/plans";
import MessageBanner from './components/message-banner';
import Sponsors from './components/sponsors';
import Comments from './components/commentss';
import LadingPage from './pages/landing-page';
import Footer from './components/footer';
import CalltoAction from './components/callToAction';
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <LadingPage />
      <Footer />
    </div>
  );
}

export default App;

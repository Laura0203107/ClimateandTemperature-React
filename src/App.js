import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './Main';

function App() {  
  //por primera vez props muy imoprtante
  return (
    <article className="grid-layout">
      <Header/> 
      <Main/>
      <Footer/>
    </article>
  );
}
export default App;
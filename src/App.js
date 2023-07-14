import React from 'react';
import './App.css';
import { Contact, Goal, Navbar, Services } from './component';
import Header from './container/header/Header';
import Clinic from './component/clinic/Clinic';

function App() {
  return (
    <div className="App">
	  <div className='dental__header'>
		<Navbar />
		<Header />
	  </div>
	  
	  <Goal />
	  <Services />
	  <Clinic/>
	  <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className='h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 overflow-x-hidden'>  
        <Navbar/>
        <div className='flex h-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-20'>
          <div className='my-20 sm:mt-10 mx-auto space-y-3 bg-white'>
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Bio from './Bio';
import Feed from './Feed';


function App(){
  let content = {
    width: '400px',
    float: 'left',
  }

  return (
    <div>
      <Navbar/>
      <div style={content}>
      <Profile/>
      <Bio/>
      </div>
      <Feed/>
    </div>
  );
}

export default App;

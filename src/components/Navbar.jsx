import React from 'react';

function Navbar() {

  let mainItems = {
    color: 'gray',
    fontSize: '20px',
    border: '1px solid lightgrey',
    padding: '5px',
    paddingRight: "5px",
    // marginTop: '10px',
  };



  let searchBar = {
    color: 'gray',
    fontSize: '20px',
    marginLeft: '5px',
    textAlign: 'right',
    border: '1px solid lightblue',
    borderRadius: '5px',
    float: 'right',
    padding: '4px',
    paddingRight: '80px',
    marginRight: '10px',
    marginTop: '-5px',
  };

  let searchItems = {
    color: 'gray',
    fontSize: '20px',
    marginRight: '30px',
    textAlign: 'right',
    border: '1px solid lightblue',
    float: 'right',
    borderRadius: '5px',
    padding: '4px',
    textAlign: 'center',
    marginTop: '-5px',
  };

let navbar = {
  marginTop: '25px',
}

  let hrBar = {
    margin: '25px 0',
  }

  return (
    <div>

    <div style={navbar}>
    <span style={mainItems}> Home </span>
    <span style={mainItems}> Notifications </span>
    <span style={mainItems}> Messages </span>

    <span style={searchItems}> Tweet </span>
    <span style={searchBar}> Search </span>

    </div>
    <hr style={hrBar}/>
    </div>
  );
}

export default Navbar;

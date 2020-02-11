import React from 'react';

function Feed() {
  let post = {
    height: "70px",
    width: "380px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
    backgroundColor: 'lightblue',
    paddingRight: '20px',
  }

  let user1 = {
    height: "90px",
    width: "400px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
  }
  let user2 = {
    height: "90px",
    width: "400px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
  }
  let user3 = {
    height: "90px",
    width: "400px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
  }
  let user4 = {
    height: "90px",
    width: "400px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
  }
  let user5 = {
    height: "90px",
    width: "400px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
  }
  let user6 = {
    height: "90px",
    width: "400px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
  }

  let happening = {
    border: '2px solid #4287f5',
    color: '#4287f5',
    marginTop: '15px',
    height: '30px',
    width: '280px',
    float: 'right',
    paddingTop: '8px',
    paddingLeft: '10px',
    backgroundColor: 'white',
  }

  let maroon = {
    height: '29px',
    width: '29px',
    border: '1px solid darkred',
    backgroundColor: 'darkred',
    marginTop: '20px',
    marginLeft: '40px',
  }

  let image = {
    height: '34px',
    width: '34px',
    border: '1px solid darkred',
    backgroundColor: 'darkred',
    float: 'left',
    marginTop: '14px',
    marginLeft: '20px',
    position: 'absolute',

  }

  let userName ={
    fontWeight: 'bold',
  }


let userContent = {
  // height: "70px",
  width: "300px",
  marginLeft: '80px',
  paddingRight: '20px',
  marginTop: '10px',
  marginBottom: '10px',
  float: 'right',
}


  return (
    <div>
    <div style={post}>
      <div style={happening}>
        <span>What's Happening?</span>
      </div>
      <div style = {maroon}>
      </div>
    </div>
    <div style={user1}>
      <div style={image}></div>
      <div style={userContent}>
      <span style={userName}>IAJSD</span>
      <br></br>
      <span>Nunc gravida mi non neque consectetur, non molestie magna congue</span>
      </div>
    </div>
    <div style={user2}>
      <div style={image}></div>
      <div style={userContent}>
      <span style={userName}>IAJSD</span>
      <br></br>
      <span>Nunc gravida mi non neque consectetur, non molestie magna congue</span>
      </div>
    </div>
    <div style={user3}>
      <div style={image}></div>
      <div style={userContent}>
      <span style={userName}>IAJSD</span>
      <br></br>
      <span>Nunc gravida mi non neque consectetur, non molestie magna congue</span>
      </div>
    </div>
    <div style={user4}>
      <div style={image}></div>
      <div style={userContent}>
      <span style={userName}>IAJSD</span>
      <br></br>
      <span>Nunc gravida mi non neque consectetur, non molestie magna congue</span>
      </div>
    </div>
    <div style={user5}>
      <div style={image}></div>
      <div style={userContent}>
      <span style={userName}>IAJSD</span>
      <br></br>
      <span>Nunc gravida mi non neque consectetur, non molestie magna congue</span>
      </div>
    </div>
    <div style={user6}>

    </div>
    </div>
  );
}

export default Feed;

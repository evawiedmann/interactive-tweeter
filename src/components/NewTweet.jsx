import React from 'react';

function NewTweet(props){
  let _tweet = null;

  function postTweet(event){
    console.log(props);
    event.preventDefault();
    props.onNewTweetCreation({tweet: _tweet.value})
    console.log(_tweet.value);

  }
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
      <form onSubmit={postTweet}>
        <input
          type='text'
          id='tweet'
          placeholder="What's Happening"
          ref={(input) => {_tweet = input;}}/>

          <button type='submit'>Tweet</button>
          </form>
      </div>
      <div  style = {maroon}>
      </div>
    </div>


    </div>
  );
}


export default NewTweet;

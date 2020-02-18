import React from "react";

class Tweets extends React.Component{

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      totalLikes: 0,
    };
    console.log(this);
    this.increaseThumbsUp = this.increaseThumbsUp.bind(this);
  }
increaseThumbsUp(){
  this.state.totalLikes += 1
  console.log(this.state.totalLikes);

}

render(){
  let tweetStyle = {
    height: "90px",
    width: "400px",
    border: "1px solid lightgrey",
    marginLeft: '425px',
  }

  let thumbsUp = {
    marginTop: '30px',
  }

  let tweetContent = {
    marginLeft: '20%',

    border: '1px solid lightblue',
    display: "flex",
    justifyContent: 'flex-start',
    padding: '10px',
    width: '270px',
  }

let square = {
  height: '29px',
  width: '29px',
  border: '1px solid darkred',
  backgroundColor: 'darkred',
  marginTop: '-15%',
  marginLeft: '40px',
}

  return(
    <div style={tweetStyle}>
    <h4 style={tweetContent}> {this.props.content}</h4>
    <div style={square}>
    <p onClick={this.increaseThumbsUp}style={thumbsUp}> 👍</p> {this.state.totalLikes}
    </div>
    </div>

  );
}
}
export default Tweets;

import React from "react";
import NewTweet from "./NewTweet"
import Tweets from "./Tweets"
class FeedController extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterTweets: []
    };
    this.addNewTweetToList = this.addNewTweetToList.bind(this);
  }
    addNewTweetToList(tweet){
      var newMasterTweets = this.state.masterTweets.slice();
          newMasterTweets.push(tweet);
          this.setState({masterTweets: newMasterTweets});
  }
render(){

  return(
    <div>
      {this.state.masterTweets.map((tweet, index) =>
      <Tweets content={tweet.content}
          key={index}/>
        )}
      <NewTweet onNewTweetCreation={this.addNewTweetToList}/>
    </div>
  );
}
}

export default FeedController;

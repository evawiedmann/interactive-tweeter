import React from "react";
import NewTweet from "./NewTweet"
class FeedController extends React.Component(){

  constructor(props) {
    super(props);
    this.state = {
      masterTweets: []
    };
    this.addNewTweetToList = this.addNewTweetToList.bind(this);
    addNewTweetToList(tweet){
      var newMasterTweets = this.state.masterTweets.slice();
          newMasterTweets.push(tweet);
          this.setState({masterTweets: newMasterTweets});
    }
  }
render(){

  return(
    <div>

      <NewTweet test={"test"}/>
    </div>
  );
}
}

export default FeedController;
